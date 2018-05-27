const seneca = require("seneca")();
const account = require("./account");

seneca.use(account, { message: "Plugin added" });

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
