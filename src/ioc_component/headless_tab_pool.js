// app.use(async ctx => {
//
//
//   let req_query = request.query;
//   let req_querystring = request.querystring;
//   console.log(req_query);
//   console.log(req_querystring);
//
//   const start = Date.now();
//
//   let url = "http://u.jd.com/ZqvIyq";
//
//   await tab.open(url);
//
//
//   ctx.body = {
//     url: await tab.getUrl(),
//     time: new Date().getTime() - start
//
//   };
// });


const Pool = require('../libs/headless/tab_pool');
exports = module.exports = function (headless_nick,config) {
  return new Pool(headless_nick,config.headless.tabInstanceCount);
};

exports['@singleton'] = true;
exports['@require'] = ['headless_nick','config'];