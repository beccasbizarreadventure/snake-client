const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "172.29.64.193",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Ready to play!");
    conn.write("Name: PWR");
  });

  conn.on("data", (eventData) => {
    console.log(eventData);
  });

  return conn;
};

module.exports = {
  connect
};