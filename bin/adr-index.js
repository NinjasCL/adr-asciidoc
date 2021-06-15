// License: BSD 2-Clause
// By: CLSource <camilo@ninjas.cl>
// This file generates a new README.adoc with all the ADR included

// Deps
const path = require('path');

const {Mustache, helpers, vars} = require("./lib");
const {workdir, indexTemplate} = vars;

// Main
(() => {
  const files = helpers.decisions();
  const includes = files.map(item => `\ninclude::adrs/${item}[]`).join("\n");

  const indexContent = "// auto-generated. modify docs/templates/index.template.adoc and recompile instead.\n" +
                        Mustache.render(indexTemplate, {includes});

  helpers.save(path.resolve(workdir, 'README.adoc'), indexContent);
})();

