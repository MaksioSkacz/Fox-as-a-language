# Fox compiler changelog

## Current development release — October 18, 2026

### Native compiler and runtime
- Expanded numeric runtime support, typed function handling, and runtime arrays in the native Windows x64 code generator.
- Fixed timer-driven Win32 redraw behavior to suppress background erasure and remove the default white class brush.
- Added `Win.maximize()` and `Win.set_resizable(true_or_false)`.
- Added `Mouse.capture(true_or_false)`, `Mouse.hide()`, `Mouse.show()`, `Mouse.update()`, `Mouse.x()`, `Mouse.y()`, `Mouse.delta_x()` and `Mouse.delta_y()`.
- Mouse capture state is released on focus loss and restored on focus return.
- Expanded the source-helper library with software framebuffer drawing, plotting, filesystem helpers, and reusable 3D math/game modules.

### Studio examples
- Spinning cube and framebuffer renderer examples.
- Math plotter and custom-function plotting examples.
- Filesystem examples using the OS helper module.
- FoxCraft3D first-person voxel sandbox prototype.
- Mouse-capture and first-person control demo.

### Website and distribution
- Updated the docs for mouse input, window controls, renderer/plot/OS helpers and current compiler limits.
- Added a Windows x64 MSI build workflow. The installer installs for the current user and adds the install directory to the user PATH.
- MSI availability depends on the Windows GitHub Actions build and Release upload completing successfully.

### Validation notes
Compiler unit tests and PE32+ output checks are run against the development snapshot. GUI behavior still needs an actual Windows desktop session for visual testing.
## Fox 0.3.1 — October 20, 2026

### Language and API documentation
- Audited the docs against `FoxNewest.7z`, not the `FoxCL.7z` backup.
- Added a separate graphics/helper API reference for native OpenGL 1.1, the current experimental Vulkan clear/present path, and all source helper families.
- Updated the main guide for runtime integer/float/boolean state, typed strings/functions, exponentiation, and integer-keyed table lookups.
- Documented current renderer scope: OpenGL fixed-function calls work through WGL; Vulkan currently supports device probing and clear/present only, without shaders or mesh pipelines.

### Windows installer
- MSI workflow now extracts `FoxNewest.7z` and explicitly fails instead of falling back to `FoxCL.7z`.
- Fixed the WiX PATH element using the core `Environment` schema element.
- Bumped MSI/package release version to `0.3.1` so Windows Installer can upgrade from the previous `0.3.0` package.
- Added pull-request builds and kept public-release publishing restricted to successful main-branch builds.

### Validation
- GitHub Actions built the standalone `fox.exe`, passed `fox.exe --help`, compiled `installer/mouse_capture_demo.fox`, and successfully generated `Fox-Setup-x64.msi` on a Windows runner.
- Archive audit: `python -m py_compile fox.py` passed. The bundled full pytest suite currently has 5 failures (4 stale GUI examples reference missing `helpers/Gui.fox`; one helper test's expected module list omits `GPU` and `Vulkan`). Some GPU diagnostic examples also call `GPU.show_diagnostic()`, which is not wrapped by the current `helpers/GPU.fox`. These source/test inconsistencies are not hidden by the documentation and remain to be fixed in the source archive.
