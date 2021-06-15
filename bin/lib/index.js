const decisions = require("./decisions");
const save = require("./save");
const vars = require("./vars");
const Mustache = require('./deps/mustache.min');

module.exports = {
  helpers: {
    decisions, save
  },
  vars,
  Mustache
};
