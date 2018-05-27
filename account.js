module.exports = function account(options) {
  this.add({ init: "account" }, (pluginInfo, respond) => {
    console.log(options.message);
    respond();
  });
  this.add({ role: "accountManagement", cmd: "login" }, (msg, respond) => {
    respond(null, {
      message: `logging in ${msg.username}`
    });
  });
  this.add({ role: "accountManagement", cmd: "register" }, (msg, respond) => {
    respond(null, {
      message: `registering ${msg.username}`
    });
  });
  return "account";
};
