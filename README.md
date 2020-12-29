<div align="center">
  <h1>Alfred Prettier Clipbaord 🎨</h1>
</div>

<p align="center">
  <strong>Format code in your clipboard with Prettier</strong></br>
  <img src="./assets/prettier-clipboard-preview.png" width="530">
</p>

## Why?

Sometimes you're writing code in a textarea where you don't have plugins/extension to automatically format your code. Rather than manually formatting your code, you can run prettier on it with this workflow.

## Requirements

- [`node`](https://nodejs.org/) - Node.js JavaScript runtime.
- [`prettier`](https://prettier.io/) - Opinionated Code Formatter.

## Installation

1. Install dependencies [`node`](https://nodejs.org/) and [`prettier`](https://prettier.io/) (must be installed globally).
1. Download the Alfred Workflow ([Prettier-Clipboard.alfredworkflow](https://github.com/epilande/alfred-prettier-clipboard/releases/latest/download/Prettier-Clipboard.alfredworkflow)).
1. Double-click to import into Alfred (requires Powerpack).
1. Customize with `.prettierrc` (see [configuration file](#configuration-file)).

## Usage

`prettier {parser}` - Run prettier on your clipboard with selected `{parser}`.

## Configuration File

Customize prettier configuration by adding `.prettierrc` file in the workflow or globally with `~/.prettierc`.

To add `.prettierrc` in the workflow

1. Go to Alfred workflows, find Prettier Clipboard.
1. Right-click -> Open in terminal. </br>
   <img src="./assets/open-in-terminal.png" width="300">
1. `$ echo '{}' > .prettierrc` (see https://prettier.io/docs/en/options.html for available options).

## License

[MIT License](https://oss.ninja/mit/epilande/)
