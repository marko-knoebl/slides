# Remote course: preparation

## Hardware requirements

- two monitors
- headset
- strongly recommended: webcam

## Common software for all courses

- [VS Code](https://code.visualstudio.com/)
- [Zoom Client for Meetings](https://zoom.us/download)
  - setup: [activate dual monitors](https://support.zoom.us/hc/en-us/articles/201362583-Using-Dual-Monitors-with-the-Zoom-Desktop-Client)

## Python courses: installing Python

- Download from <https://www.python.org/>
- on Windows, make sure to check the option "Add Python 3.x to PATH" during installation
- after installation, verify that Python works and can access the internet:
  - open the Windows start menu and type "cmd" to look for and launch the command prompt
  - enter the command: `python --version`  
    (it should display the Python version)
  - enter the command: `pip install requests`  
    (it should successfully download and install a small Python package named _requests_)

## React courses: installing node.js

- Download and install node.js 14 or later from <https://nodejs.org/>
- after installation, verify that node works and can access the internet:
  - open the Windows start menu and type "cmd" to look for and launch the command prompt
  - enter the command: `node -v`  
    (it should display the node version)
  - enter the command: `npx cowsay hello`  
    (it should download and run the cowsay package, displaying an ASCII cow)
