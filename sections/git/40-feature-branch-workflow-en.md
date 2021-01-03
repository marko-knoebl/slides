# Feature branch workflow

## Feature branch workflow

workflow:

To introduce a new feature / change, create a new so-called _feature branch_

The feature branch can individually evolve in parallel to the master branch

If the master branch evolves, its changes can be combined / merged back into the feature branch

Once the feature is complete, it can be combined / merged back into the master branch (after being reviewed by other developers)

## Feature branch workflow

often feature branches can be small, e.g. _fix-spelling-error-in-readme_

some feature branches must be big, e.g. _port-to-typescript_

## Feature branch workflow

example: developers are working on two different tasks at the same time:

```txt
* add sidebar (sidebar)
| * add logo to footer (footer)
| * add footer with basic content
|/
* add placeholder content (master)
* initialize website
```

## Feature branch workflow

when a feature is completed it can be combined / merged back into the master branch:

```txt
* add footer (master)
| * add sidebar (sidebar)
|/
* add placeholder content
* initialize website
```

## Feature branch workflow

other branches can take over the changes from the master branch via _merge_ or _rebase_:

```txt
  * add sidebar (sidebar)
 /
* add footer (master)
* add placeholder content
* initialize website
```

## Feature branch workflow

during development:

- create a new feature branch off of _master_
- commit to it often
- merge (or rebase) when new commits are made to the _master_ branch to keep up with the rest of the project

when the feature is ready:

- optional: combine all commits on the branch into one commit (rebase)
- merge into the _master_ branch
- delete the feature branch

## See also

- https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
<!-- https://stackoverflow.com/questions/tagged/git?tab=Votes -->
