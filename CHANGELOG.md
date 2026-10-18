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