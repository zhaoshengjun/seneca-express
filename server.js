const seneca = require("seneca")();

seneca.add({ role: "accountManagement", cmd: "register" }, (msg, respond) => {
  respond(null, {
    message: `registering ${msg.username}`
  });
});

seneca.add({ role: "accountManagement", cmd: "login" }, (msg, respond) => {
  respond(null, {
    message: `logging in ${msg.username}`
  });
});

seneca.act(
  { cmd: "register", role: "accountManagement", username: "testuser" },
  (err, result) => {
    if (err) console.error(err);
    console.log(`register response: ${result.message} `);
  }
);

seneca.act(
  { cmd: "login", role: "accountManagement", username: "testuser" },
  (err, result) => {
    if (err) console.error(err);
    console.log(`register response: ${result.message} `);
  }
);
