const fs = require('fs');
const path = require('path');

const workdirname = "docs";
const adrdirname = "adrs";
const extension = "adoc";

const workdir = path.resolve(__dirname, `../../${workdirname}`);
const adrdir = path.resolve(workdir, adrdirname);

const templatePath = path.resolve(workdir, `templates/adr.template.${extension}`);
const template = fs.readFileSync(templatePath, "utf8").toString();

const indexTemplatePath = path.resolve(workdir, `templates/index.template.${extension}`);
const indexTemplate = fs.readFileSync(indexTemplatePath, "utf8").toString();

module.exports = {
  workdir,
  adrdir,
  workdirname,
  adrdirname,
  extension,
  templatePath,
  template,
  indexTemplatePath,
  indexTemplate
};
