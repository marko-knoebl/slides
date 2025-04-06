# npm

## npm registry

The npm registry is an online registry consisting primarily of open source JavaScript packages

examples: [most depended upon packages](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491#file-01-most-dependent-upon-md)

## Package managers

major package managers for the npm registry:

- _npm_: Node package manager, comes with node.js
- _pnpm_
- _yarn_

## Package configuration

Both public packages and private projects are managed via a configuration file named _package.json_

## Package configuration

In order to add dependencies - start out with an empty _package.json_ configuration:

```json
{}
```

Alternative: create a _package.json_ with some content via via `npm init` (or `npm init -y` for default options)

## Adding dependencies

Add dependencies via e.g.:

```bash
npm install lodash bootstrap
```

## Adding dependencies

When developing a reusable library to be published on the npm package registry:

Install dependencies that are only needed for development as _dev-dependencies_:

```bash
npm install eslint --save-dev
```

## Adding dependencies

Effects of the previous `npm install` commands:

- `package.json` - lists minimum versions of the packages we just installed
- `node_modules` - folder that contains all installed packages
- `package-lock.json` - lists exact versions of all packages in `node_modules`

## Dependencies in package.json

The file `package.json` now lists dependencies together with a version specifier

The version specifier typically uses _semantic versioning_: `major.minor.patch`

possible configurations:

- `"bootstrap": "4.3.1"` - exactly this version
- `"bootstrap": "~4.3.1"` - patch version updates allowed - for example to `4.3.2`
- `"bootstrap": "^4.3.1"` - minor version updates allowed - for example to `4.4.0`

## Dependencies in package-lock.json

`package-lock.json` lists _exact_ versions for all dependencies and their recursive dependencies

## node_modules folder

contains the actual packages

this should not be put under version control - can be recreated from `package.json` by running `npm install` (without any arguments)

## npm scripts

Npm can be used to execute scripts / commands that are needed for development, for example:

- `npm run test` - would run unit tests
- `npm run build` - would create a build
- `npm run start`
- `npm run deploy`

Some npm scripts have shorthands, notably `npm test` and `npm start`

## npm scripts

Npm scripts are configured in `package.json`:

```json
{
  "scripts": { "start": "node run-server.js" }
}
```

## Global installs and npx

Node packages may be installed globally on a computer or may be executed directly from the npm registry

direct execution (without installation):

```bash
npx cowsay hello
```

global installation of `cowsay`:

```bash
npm install -g cowsay

cowsay hello
```
