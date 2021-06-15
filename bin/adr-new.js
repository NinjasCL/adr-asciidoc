// License: BSD 2-Clause
// By: CLSource <camilo@ninjas.cl>
// This file renders a new adr file

// Deps
const path = require('path');
const {Mustache, helpers, vars} = require("./lib");

// Clean the args
const args = [...process.argv];
args.shift();
args.shift();

const title = args.join(" ");

// code based on https://raw.githubusercontent.com/keremciu/adr-tool/main/src/commands/create.ts
const cleanTitle = title.toLowerCase().trim()
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single _
    .replace(/^-+|-+$/g, '') // remove leading, trailing -
    .replace(/，/g, '')
    .replace(/。/g, '')
    .replace(/ /g, '-')
    .replace(/\?/g, '-')
    .replace(/#/g, '')
    .replace(/:/g, '')
    .replace(/# /g, '');

// Helper functions

const newFile = () => {

  const getLatestIndex = () => {
    const decisionFiles = helpers.decisions();

    if (!(decisionFiles && decisionFiles.length > 0)) {
      return 0;
    }

    return decisionFiles.length;
  };

  const {adrdir, extension} = vars;

  const newIndex = getLatestIndex() + 1;
  const fileIndex = ("000000" + newIndex).substr(3);
  const filename = fileIndex + "-" + cleanTitle;
  const filePath = path.resolve(adrdir, `${filename}.${extension}`);

  const date = new Date();
  const fileDate = date.toISOString();

  return {
    index: fileIndex,
    fileIndex,
    name: filename,
    path:filePath,
    date: fileDate,
    dateLocale: date.toLocaleString(),
    extension,
    title,
    cleanTitle
  };
};

// Main
(() => {
  const {template} = vars;
  const file = newFile();

  const content = Mustache.render(template, file);
  helpers.save(file.path, content);
})();


