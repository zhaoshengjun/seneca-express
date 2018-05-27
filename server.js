const seneca = require("seneca")();

seneca.add({ cmd: "salestax" }, (msg, done) => {
  const rate = 0.23;
  let total = msg.net * (1 + rate);
  done(null, { total });
});

seneca.act({ cmd: "salestax", net: 100 }, (err, result) => {
  console.log(result.total);
});
