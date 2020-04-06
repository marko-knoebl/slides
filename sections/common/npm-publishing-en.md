# Publishing npm packages

## Publishing npm packages

- create an account on _npmjs.com_
- create a package.json file
- create a _.gitignore_ or _.npmignore_ file
- run `npm publish --access public`

## package.json - basic entries

- _name_: either _mypackage_ (if still available) or _@myusername/mypackage_
- _description_
- _version_: e.g. _0.1.0_
- _author_: author's name
- _license_: e.g. _UNLICENSED_, _ISC_, _GPL-3.0_, ...

## package.json - advanced entries

- _main_: e.g. _index.js_ - the entry point when importing this package
- _scripts_: commands that can be run via _npm run_ (e.g. _build_, _test_, _start_, ...)
- _bin_: commands that can be run from the command line or via npx
- _dependencies_: npm packages that are required to use this npm package
- _devDependencies_: npm packages that are required to develop this npm package (e.g. test tools, build tools)

## package.json entries

See https://docs.npmjs.com/files/package.json

## Ignoring files

Create a `.gitignore` or `.npmignore` file that lists files that shouldn't be published:

```
.git
node_modules
package-lock.json
```

## Publishing

```bash
npm publish --access public
```

## npx scripts

entry "bin" in `package.json` (should match package name without username):

```json
{
  "name": "@user/foo-package",
  "bin": {
    "foo-package": "./foo-bin.js"
  }
}
```

contents of `foo-bin.js`:

```js
#! /usr/bin/env node

console.log('this is the npx script of foo-package');
```
