# Shimmer
The idea is pretty simple - test for a functionality, if it's not found, then load a shim that patches it.

## How?
Put all files in one folder and load **shimmer.js** somewhere (preferably as soon as possible) in your document. Adjust the variable **srcPath** (with comment *NEED MANUAL ADJUSTMENT!*) accordingly and you're good to go.

## Why?
I got tired of how bulky and needlessly complicated Modernizr is, while all I needed was a simple drop-in patcher so that code could just work.
