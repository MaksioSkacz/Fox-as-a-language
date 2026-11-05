# Fox Language Documentation

The public documentation site for the evolving native Windows x86-64 compiler.

## Website

- Main language guide: https://maksioskacz.github.io/Fox-as-a-language/
- Graphics and helper API reference: https://maksioskacz.github.io/Fox-as-a-language/api-reference.html

## Current compiler capabilities

- Python-written compiler emits native Windows x86-64 PE32+ executables by generating machine code directly; installed programs do not need Python.
- Mutable runtime scalar support for signed integers, IEEE-754 binary64 floats, booleans, and typed strings; typed function parameters/returns; numeric exponentiation with `^`.
- Native Win32 windows and controls, GDI rectangles/text, paint and timer callbacks, software pixel-framebuffer presentation, maximize/non-resizable controls, and mouse capture/position/delta support.
- Built-in console output, fixed-point output, file-operation shortcuts, native worker threads, keyboard polling, and native mouse controls.
- Native `GPU` helper using WGL and system OpenGL 1.1 fixed-function calls: immediate-mode geometry, transforms, display lists, texture upload, driver strings and capability queries.
- Experimental `Vulkan` device probing plus a Win32 surface/swapchain clear-and-present path. It is not a mesh or shader renderer.
- 22 Fox source-helper modules covering camera, collision, color, OpenGL, game logic, geometry, keyboard, math, matrices, filesystem, physics, plotting, quaternions, random numbers, raycasts, software rendering, runtime arrays, time, Tkinter-style layout calculations, vectors, Vulkan and voxel-world storage.
- FoxCraft3D voxel sandbox, OpenGL cube/texture diagnostics, Vulkan clear demo, software renderer, plotting, filesystem, mouse and native-window examples.
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

The Windows MSI workflow currently extracts the repository's **`FoxNewest.7z`** build input and deliberately does not fall back to `FoxCL.7z`. That installer input is separate from the source snapshot documented by this page; refresh the archive and rebuild the MSI before treating the release installer as matching the latest compiler source. Keep `fox.py` beside the matching `helpers/` directory when invoking the compiler directly with Python.

The MSI is versioned independently from the language docs. The workflow builds a standalone executable with PyInstaller, smoke-tests the CLI, compiles the mouse/window demo to a native executable, then produces the per-user WiX MSI. Releases are only published from the main branch after the build succeeds.

## Documentation files

- `index.html` — language guide
- `api-reference.html` — OpenGL, Vulkan and source-helper API reference
- `styles.css` — responsive themes and layout
- `app.js` — search, navigation, theme preference and code-copy behavior
- `CHANGELOG.md` — release/compiler changes
- `fox-vscode/` — VS Code language extension for `.fox` files, with TextMate syntax highlighting, language configuration, snippets and basic keyword completions
- `.github/workflows/build-fox-msi.yml` — Windows installer build and release workflow
- `installer/Fox.wxs` — per-user MSI definition and user PATH integration

The site is plain HTML, CSS and JavaScript and needs no build step.
