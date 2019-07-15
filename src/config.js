module.exports = {
  app:{
    user: process.env.RUNTIME_USER || "",
    group: process.env.RUNTIME_GROUP || "",
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