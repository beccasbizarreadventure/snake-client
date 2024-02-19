const { messages, moveUp, moveDown, moveLeft, moveRight} = require("./constants");

let connection;

let player = {
  x: 0,
  y: 0,
};

const handleUserInput = function(data) {
  
  if (data === '\u0003') {
    process.exit();
  }
  if (data === moveUp) {
    player.y += 1;
    connection.write("Move: up");
  }
  if (data === moveDown) {
    player.y -= 1;
    connection.write("Move: down");
  }
  if (data === moveLeft) {
    player.x -= 1;
    connection.write("Move: left");
  }
  if (data === moveRight) {
    player.x += 1;
    connection.write("Move: right");
  }
  if (messages[data]) {
    connection.write(messages[data]);
  }

};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};