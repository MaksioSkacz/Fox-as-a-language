(() => {
  const root = document.documentElement;
  const search = document.getElementById('docs-search');
  const sections = [...document.querySelectorAll('.doc-section')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const noResults = document.getElementById('no-results');
  const toast = document.getElementById('toast');
  const sidebar = document.getElementById('sidebar');
  const menuButton = document.getElementById('mobile-menu');
  let toastTimer;

  // Theme preference is optional: the docs still work when storage is unavailable.
  try {
    const saved = localStorage.getItem('fox-docs-theme');
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch (_) { /* Storage may be disabled by the browser. */ }
  updateThemeIcon();

  function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    const button = document.getElementById('theme-toggle');
    const isDark = root.dataset.theme !== 'light';
    icon.textContent = isDark ? '☼' : '☾';
    button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    button.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  }

  document.getElementById('theme-toggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    updateThemeIcon();
    try { localStorage.setItem('fox-docs-theme', root.dataset.theme); } catch (_) { /* Ignore. */ }
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1900);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied to clipboard');
    } catch (_) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      textarea.remove();
      showToast(ok ? 'Copied to clipboard' : 'Copy failed — select the code and copy it manually');
    }
  }

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.copy);
      if (!target) return;
      // Use innerText so syntax-highlighting spans aren't copied as HTML.
      copyText(target.innerText || target.textContent || '');
    });
  });

  function runSearch() {
    const query = (search.value || '').trim().toLowerCase();
    let count = 0;
    sections.forEach(section => {
      const content = `${section.dataset.search || ''} ${section.innerText || ''}`.toLowerCase();
      const matches = !query || content.includes(query);
      section.hidden = !matches;
      if (matches) count++;
    });
    noResults.hidden = count !== 0;
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#')) {
        link.hidden = false;
        return;
      }
      const target = document.querySelector(href);
      link.hidden = !!query && (!target || target.hidden);
    });
  }
  search.addEventListener('input', runSearch);
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault(); search.focus();
    }
    if (event.key === 'Escape' && document.activeElement === search) {
      search.value = ''; runSearch(); search.blur();
    }
  });

  menuButton.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navLinks.forEach(link => link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (search.value) { search.value = ''; runSearch(); }
  }));

  // Keep the sidebar's active state in sync with the section nearest the top.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-22% 0px -66% 0px', threshold: [0, .1, .3, .5] });
    sections.forEach(section => observer.observe(section));
  }
})();
