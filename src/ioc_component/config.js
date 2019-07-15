const Config = require("../config");



exports = module.exports = function () {
  return Config;
};

exports['@singleton'] = true;