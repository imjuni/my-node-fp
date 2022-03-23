Simple node programming utility
---

[![Download Status](https://img.shields.io/npm/dw/my-node-fp.svg)](https://npmcharts.com/compare/my-node-fp?minimal=true) [![Github Star](https://img.shields.io/github/stars/imjuni/my-node-fp.svg?style=popout)](https://github.com/imjuni/my-node-fp) [![Github Issues](https://img.shields.io/github/issues-raw/imjuni/my-node-fp.svg)](https://github.com/imjuni/my-node-fp/issues) [![NPM version](https://img.shields.io/npm/v/my-node-fp.svg)](https://www.npmjs.com/package/my-node-fp) [![License](https://img.shields.io/npm/l/my-node-fp.svg)](https://github.com/imjuni/my-node-fp/blob/master/LICENSE)

Simple utility functions that can use node. 

# Function list
## fs 
| name | description |
| - | - |
| exists | check file or directory exist, return boolean. exactly same depreciated fs.promise.exists funciton |
| existsSync | check file or directory exist, return boolean. exactly same depreciated fs.existsSync funciton |
| getDirname | get directory name. If targetPath is already directory return targetPath(not parent directory) |
| replaceSepToPosix | change sep to posix.sep |
| replaceSepToWin32 | change sep to win32.sep |
