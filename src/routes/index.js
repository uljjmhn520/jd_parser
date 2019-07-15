var express = require('express');
var router = express.Router();
const Ioc = require('electrolyte');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/jd_pool',async function(req, res, next) {

  let start = new Date();
  let query = req.query;

  let url = query.url;

  let pool = null;
  try{

    if (!url) {
      throw new Error('url is not empty');
    }

    //http://u.jd.com/ZqvIyq
    pool = await Ioc.create('headless_tab_pool');

    let instance = await pool.get();
    await instance.open(url);
    let newUrl = await instance.getUrl();
    pool.release(instance);

    res.send({
      code:0,
      data:{
        newUrl:newUrl,
        url:url,
        time: new Date().getTime() - start.getTime()

      }
    })
  }catch (e) {
    res.send({
      code:12345,
      msg:e.message,
      data:{
        url:url
      }
    })
  }



});





router.get('/jd',async function(req, res, next) {

  let start = new Date();
  let query = req.query;

  let url = query.url;

  try{

    if (!url) {
      throw new Error('url is not empty');
    }

    //http://u.jd.com/ZqvIyq
    // pool = await Ioc.create('headless_tab_pool');
    //
    // let instance = await pool.get();
    // await instance.open(url);
    // let newUrl = await instance.getUrl();


    let nick = await Ioc.create('headless_nick');
    let tab = await nick.newTab();
    await tab.open(url);
    let newUrl = await tab.getUrl();

    //pool.release(instance);

    res.send({
      code:0,
      data:{
        newUrl:newUrl,
        url:url,
        time: new Date().getTime() - start.getTime()

      }
    })
  }catch (e) {
    res.send({
      code:12345,
      msg:e.message,
      data:{
        url:url
      }
    })
  }



});

module.exports = router;
