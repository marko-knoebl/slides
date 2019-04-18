# Presentations for programming courses

This is a collection of presentations for programming courses.

The presentations are standalone HTML files that can be downloaded and viewed offline.

## Technical details, writing your own

You can clone this repo, run `npm install` and create new / modified presentations.

The starting point for each presentation is a JSON file in _src/configs_. It will list sections and assets to be included in a presentation. The sections are created as Markodown files.

Presentations can be built by running `npm run build` - they will end up in the _build_ folder.
