const _iocObj = require('electrolyte');
const path = require('path');


_iocObj.use(_iocObj.dir(path.join(__dirname , 'ioc_component' )));

console.log('ioc init');