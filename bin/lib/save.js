const fs = require("fs");

const save = (filepath, content) => fs.writeFileSync(filepath, content);

module.exports = save;
