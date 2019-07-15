

class TabPool {


  constructor(nickInstance,instanceCount = 2) {
    console.log('what');
    this._tabInstanceList = [];
    this._nickInstance = nickInstance;
    this._createInstance(instanceCount).then(() => {
      console.log('tab pool created success');
    });
  }

  async _createInstance(instanceCount){
    for(let i=0;i<instanceCount;++i){
      console.log(i);
      //let a = await this._nickInstance.newTab();
      this._tabInstanceList.push(await this._nickInstance.newTab());
      console.log(this._tabInstanceList.length);

    }
  }

  async get() {
    let that = this;
    return new Promise((resolve, reject) => {
      let instance = null;

      console.log('what ');


      let intval = setInterval(() => {
        instance = this._tabInstanceList.shift();
        if (instance) {
          clearInterval(intval);
          return resolve(instance);
        }


        //return that.get();
      },10);



    });

  }

  async release(instance){
    this._tabInstanceList.push(instance);
  }
}

module.exports = TabPool;