# Fox Language Documentation

The public documentation site for the evolving native Windows x86-64 compiler.

## Website

Open the live site: https://maksioskacz.github.io/Fox-as-a-language/

## Current compiler capabilities

- Python-written compiler emits native Windows x86-64 PE32+ executables.
- Native integer and binary64 numeric runtime, typed function handling, and runtime arrays.
- Native Win32 windows, paint/timer callbacks, background-erasure suppression to reduce white-frame flicker, maximize and non-resizable-window controls.
- Built-in mouse capture, cursor visibility, client-relative position and per-update movement deltas for first-person controls.
- Source helper modules in `helpers/`: Renderer, Plot, OS, Math, vectors/matrices/quaternions, geometry, camera, physics, collision and raycast utilities.
- A small FoxCraft3D first-person voxel sandbox and examples for plotting, rendering, filesystem operations and native windows.
- A VS Code extension with Fox syntax highlighting and language configuration.

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

The latest compiler source and helper modules are bundled into the MSI build workflow source archive. Keep `fox.py` beside the matching `helpers/` directory when invoking the compiler directly with Python.

## Documentation files

- `index.html` — guide and API reference
- `styles.css` — responsive themes and layout
- `app.js` — search, navigation, theme preference and code-copy behavior
- `CHANGELOG.md` — recent language/compiler changes
- `.github/workflows/build-fox-msi.yml` — Windows installer build and release workflow
- `installer/Fox.wxs` — per-user MSI definition

The web page is plain HTML, CSS and JavaScript; it needs no build step.