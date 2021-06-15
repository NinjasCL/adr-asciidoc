const fs = require("fs");

const {adrdir, extension} = require("./vars");

const getDecisions = (dir = adrdir, ext = extension) => {
  const files = fs.readdirSync(dir);
  const slicePos = -ext.length;

  const decisionFiles = files.filter((filename) =>
    ext === filename.slice(slicePos)
  );

  return decisionFiles;
};

module.exports = getDecisions;
