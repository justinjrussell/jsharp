jSharp — JavaScript library for bringing C# to the Browser
==================================================


What you need to build your own jSharp
--------------------------------------

In order to build jSharp, you need to have Node.js/npm latest and git 1.7 or later.
(Earlier versions might work OK, but are not tested.)

For Windows you have to download and install [git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download/).

Mac OS users should install [Homebrew](http://mxcl.github.com/homebrew/). Once Homebrew is installed, run `brew install git` to install git,
and `brew install node` to install Node.js.

Linux/BSD users should use their appropriate package managers to install git and Node.js, or build from source
if you swing that way. Easy-peasy.



How to build your own jSharp
----------------------------

Clone a copy of the main jSharp git repo by running:

```bash
git clone git://github.com/justinjrussell/jsharp.git
```

Enter the jsharp directory and run the build script:
```bash
cd jsharp && npm run build
```
The built version of jSharp will be put in the `dist/` subdirectory, along with the minified copy and associated map file.

If you want create custom build or help with jSharp development, it would be better to install [grunt command line interface](https://github.com/gruntjs/grunt-cli) as a global package:

```
npm install -g grunt-cli
```
Make sure you have `grunt` installed by testing:
```
grunt -v
```

Now by running `grunt` command, in the jsharp directory, you could build full version of jSharp, just like with `npm run build` command:
```
grunt
```


Building to a different directory
---------------------------------

To copy the built jSharp files from `/dist` to another directory:

```bash
grunt && grunt dist:/path/to/special/location/
```
With this example, the output files would be:

```bash
/path/to/special/location/jsharp.js
/path/to/special/location/jsharp.min.js
```

To add a permanent copy destination, create a file in `dist/` called ".destination.json". Inside the file, paste and customize the following:

```json

{
  "/Absolute/path/to/other/destination": true
}
```

Additionally, both methods can be combined.



Essential Git
-------------

As the source code is handled by the Git version control system, it's useful to know some features used.

### Cleaning ###

If you want to purge your working directory back to the status of upstream, following commands can be used (remember everything you've worked on is gone after these):

```bash
git reset --hard upstream/master
git clean -fdx
```

### Rebasing ###

For feature/topic branches, you should always use the `--rebase` flag to `git pull`, or if you are usually handling many temporary "to be in a github pull request" branches, run following to automate this:

```bash
git config branch.autosetuprebase local
```
(see `man git-config` for more information)

### Handling merge conflicts ###

If you're getting merge conflicts when merging, instead of editing the conflicted files manually, you can use the feature
`git mergetool`. Even though the default tool `xxdiff` looks awful/old, it's rather useful.

Following are some commands that can be used there:

* `Ctrl + Alt + M` - automerge as much as possible
* `b` - jump to next merge conflict
* `s` - change the order of the conflicted lines
* `u` - undo a merge
* `left mouse button` - mark a block to be the winner
* `middle mouse button` - mark a line to be the winner
* `Ctrl + S` - save
* `Ctrl + Q` - quit
