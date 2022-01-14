#!/usr/bin/env osascript -l JavaScript

function run(args) {
  const parsers = [
    "flow",
    "babel",
    "babel-flow",
    "babel-ts",
    "typescript",
    "espree",
    "meriyah",
    "css",
    "less",
    "scss",
    "json",
    "json5",
    "json-stringify",
    "graphql",
    "markdown",
    "mdx",
    "vue",
    "yaml",
    "html",
    "angular",
    "lwc",
    "sql",
  ];

  const items = parsers.map((p) => ({
    title: p,
    arg: p,
    subtitle: `Format clipboard with ${p}`,
  }));

  return JSON.stringify({ items: items });
}
