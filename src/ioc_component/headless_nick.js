const Nick = require("nickjs");



exports = module.exports = function () {
  return new Nick({
    whitelist:[
      // /^.*?u\.jd\..*$/,
      // /^.*?wd\.jd\..*$/,
      // // /^.*?jr\.jd\..*$/,
      // // /^.*?item\.jd\..*$/,
      // /^.*?\d+\.html.*$/,
      // /^.*?index\.html.*$/,
    ],
    blacklist: [
      /\.js.*$/,
      /\.css.*$/,
      /\.jpg.*$/,
      /\.png.*$/,
      /\.gif.*$/,
    ],
    printAborts: false
  });


};

exports['@singleton'] = true;