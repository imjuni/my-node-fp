# Simple node programming utility

![ts](https://flat.badgen.net/badge/Built%20With/TypeScript/blue)
[![Download Status](https://img.shields.io/npm/dw/my-node-fp.svg)](https://npmcharts.com/compare/my-node-fp?minimal=true)
[![Github Star](https://img.shields.io/github/stars/imjuni/my-node-fp.svg?style=popout)](https://github.com/imjuni/my-node-fp)
[![Github Issues](https://img.shields.io/github/issues-raw/imjuni/my-node-fp.svg)](https://github.com/imjuni/my-node-fp/issues)
[![NPM version](https://img.shields.io/npm/v/my-node-fp.svg)](https://www.npmjs.com/package/my-node-fp)
[![License](https://img.shields.io/npm/l/my-node-fp.svg)](https://github.com/imjuni/my-node-fp/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Simple utility functions that can use node.

## Function list

### fs

| name | description |
| - | - |
| exists | check file or directory exist, return boolean. exactly same depreciated fs.promise.exists funciton |
| existsSync | check file or directory exist, return boolean. exactly same depreciated fs.existsSync funciton |
| getDirname | get directory name. If targetPath is already directory return targetPath(not parent directory) |
| getDirnameSync | get directory name. If targetPath is already directory return targetPath(not parent directory) |
| isDirectory | if targetPath is directory, return true |
| isDirectorySync | if targetPath is directory, return true |
| isEmptyDir | check directory is empty |
| isEmptyDirSync | check directory is empty |
| isDescendant | check target directory is descendant of parent directory |

### path

| name | description |
| - | - |
| basenames | Return the last portion of a path, suffix can be string, string[] |
| replaceSepToPosix | change sep to posix.sep |
| replaceSepToWin32 | change sep to win32.sep |
| win32DriveLetterUpdown | change win32 drive letter (ex> c:) to upper or lower |
| startSepAppend | starts sep(or you can pass sep character) append if not start sep |
| endSepAppend | ends sep(or you can pass sep character) append if not end sep |
| startSepRemove | starts sep(or you can pass sep character) remove if start sep |
| endSepRemove | ends sep(or you can pass sep character) remove if end sep |
