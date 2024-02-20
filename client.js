const { IP, PORT, Name } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Ready to play!");
    conn.write(`Name: ${Name}`);
  });
  // logs ready message to client and name to server 
  conn.on("data", (eventData) => {
    console.log(eventData);
  });

  return conn;
};

module.exports = {
  connect
};