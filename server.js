const seneca = require("seneca")();

seneca.act({ cmd: "register", role: "accountManagement" }, (err, result) => {
  if (err) console.error(err);
  console.log(`register response: ${result.message} `);
});

seneca.act({ cmd: "login", role: "accountManagement" }, (err, result) => {
  if (err) console.error(err);
  console.log(`register response: ${result.message} `);
});
