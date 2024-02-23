# Git remote

## Git remote

Hosts for Git:

- **GitHub**
- **GitLab**

## Collaboration via GitHub

initial options:

- clone an existing git repository from GitHub
- publish local repository to GitHub

## Cloning an existing Git repository

```bash
git clone https://github.com/...
```

On GitHub, copy the link from the green _clone or download_ button

## Publishing a new Git repository

On GitHub, click the _+_ in the top right corner

_Don't_ select "Initialize this repository with a README".

## Publishing a new Git repository

Once you have an empty repository on GitHub, follow the instructions for an _existing repository_ displayed on GitHub

Usually you will connect a local repository to a single remote repository - the remote repository is conventionally named _origin_

```bash
git remote add origin https://github.com/...
```

## Publishing a new branch

Whenever we want to publish a branch the remote doesn't know about:

```bash
git push -u origin main
```

The above command copies the the commits in the local _main_ branch to a newly created remote _main_ branch.

## Publishing commits to a known branch

If we want to publish commits to a known branch:

```bash
git push
```

## Getting new commits from a remote branch

Fetch and merge commits from the remote branch corresponding to the active branch:

```bash
git pull
```

## Deleting a remote branch

deleting a _local_ branch:

```bash
git branch -d python-3-port
```

deleting the _remote_ branch as well:

```bash
git push origin :python-3-port
```

## Remembering credentials

```bash
git config credential.helper cache
```

Git will now remember passwords for 15 minutes
