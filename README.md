# Fox Language Documentation

A self-contained, static documentation website for the current Fox compiler implementation.

## Files
- `index.html` — guide and reference content
- `styles.css` — responsive styling and light/dark themes
- `app.js` — client-side section search, code-copy buttons, navigation, and theme preference

## Open it
Double-click `index.html` or open it in a browser. No build step or server is required. The page imports Google Fonts when internet access is available, but otherwise falls back to system fonts.

## Accuracy notes
This reference was written against the Fox compiler source available during creation. The guide distinguishes compile-time values from native runtime integer state and calls out current restrictions, including the Windows x86-64 target and limited GUI/thread APIs. As the language evolves, compare the reference against the current `fox.py` implementation.
