module.exports = {
  app:{

  },
  server:{
    port:process.env.SERVER_PORT || 50005
  },
  headless:{
    pool:{
      instanceCount:process.env.HEADLESS_TAB_POOL_INSTANCE_COUNT || 4
    }
  }
};