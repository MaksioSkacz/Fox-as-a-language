# Fox Language Documentation

The public documentation site for the evolving native Windows x86-64 compiler.

## Website

- Main language guide: https://maksioskacz.github.io/Fox-as-a-language/
- Graphics and helper API reference: https://maksioskacz.github.io/Fox-as-a-language/api-reference.html

## Current compiler capabilities

- Python-written compiler emits native Windows x86-64 PE32+ executables by generating machine code directly; installed programs do not need Python.
- Mutable runtime scalar support for signed integers, IEEE-754 binary64 floats, booleans, and typed strings; typed function parameters/returns; numeric exponentiation with `^`.
- Native Win32 windows and controls, paint/timer callbacks, native GDI drawing, RGB framebuffer blitting, maximize/non-resizable window controls, and mouse capture/relative cursor deltas.
- Native `GPU` helper using WGL and the system OpenGL 1.1 fixed-function API, with immediate-mode geometry, display lists, textures and driver information.
- Experimental `Vulkan` device probe and Win32 surface/swapchain clear-and-present test. It is not yet a mesh/shader renderer.
- Source helper modules under `helpers/`: software framebuffer renderer, plotting, filesystem helpers, math, vectors/matrix components/quaternions, camera, physics, geometry, collision/raycast, pseudo-random generator, runtime arrays and voxel-world storage.
- FoxCraft3D first-person voxel sandbox, GPU cube and texture examples, Vulkan clear demo, plotting, filesystem, mouse and native-window examples.
- VS Code extension with Fox syntax highlighting and language configuration.

The exact API and current graphics limits are documented in the [graphics & helper API reference](https://maksioskacz.github.io/Fox-as-a-language/api-reference.html). Normal arrays/dictionaries remain compile-time values; use `RuntimeArray`/ `World3D` for mutable native numeric buffers.

## Install the Windows command-line compiler

Download Fox-Setup-x64.msi from the [latest GitHub Release](https://github.com/MaksioSkacz/Fox-as-a-language/releases/latest).

The installer is per-user: it installs the compiler under your local application data folder and adds that folder to your user-level `PATH`. Reopen PowerShell after installation, then run:

```powershell
fox --help
fox hello.fox
fox hello.fox --compile-only
```

The MSI packages the compiler into a standalone `fox.exe`; Python is not required to invoke the installed compiler. Fox emits native Windows x64 executables.

## Build from source

The Windows MSI workflow extracts **`FoxNewest.7z`** as its source of truth. It deliberately does not fall back to `FoxCL.7z`, which is a backup archive. Keep `fox.py` beside the matching `helpers/` directory when invoking the compiler directly with Python.

The MSI is versioned independently from the language docs. The workflow builds a standalone executable with PyInstaller, smoke-tests the CLI, compiles the mouse/window demo to a native executable, then produces the per-user WiX MSI. Releases are only published from the main branch after the build succeeds.

## Documentation files

- `index.html` — language guide
- `api-reference.html` — OpenGL, Vulkan and source-helper API reference
- `styles.css` — responsive themes and layout
- `app.js` — search, navigation, theme preference and code-copy behavior
- `CHANGELOG.md` — release/compiler changes
- `.github/workflows/build-fox-msi.yml` — Windows installer build and release workflow
- `installer/Fox.wxs` — per-user MSI definition and user PATH integration

The site is plain HTML, CSS and JavaScript and needs no build step.
