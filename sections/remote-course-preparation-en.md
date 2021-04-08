# Remote course: preparation

## Hardware requirements

- two monitors
- headset
- strongly recommended: webcam

## Common software for all courses

- [VS Code](https://code.visualstudio.com/)
- [Zoom Client for Meetings](https://zoom.us/download)

## Configuring Zoom for concurrent screen sharing

Configuring your Zoom client so you can _share your screen_ and you can _see a shared screen_ at the same time:

[instructions](https://support.zoom.us/hc/en-us/articles/201362583-Using-Dual-Monitors-with-the-Zoom-Desktop-Client)

(you may have to restart Zoom)

## Python courses: installing Python

download a Python _installer_ from <https://www.python.org/>

recommendation: install the _previous_ release (e.g. 3.8 instead of 3.9) - some packages (like _NumPy_ or _TensorFlow_) take some time before they are available for the latest release

on Windows, make sure to check the option "Add Python 3.x to PATH" during installation (so the _python_ command works on the command line)

after installation, verify that Python is available on the command line:

- open the Windows start menu and type "cmd" to look for and launch the command prompt
- enter the command: `python --version`  
  (it should display the Python version)

## React courses: installing node.js

- Download and install node.js 14 or later from <https://nodejs.org/>
- after installation, verify that node works and can access the internet:
  - open the Windows start menu and type "cmd" to look for and launch the command prompt
  - enter the command: `node -v`  
    (it should display the node version)
  - enter the command: `npx cowsay hello`  
    (it should download and run the cowsay package, displaying an ASCII cow)
