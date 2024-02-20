const { messages, moveUp, moveDown, moveLeft, moveRight} = require("./constants");

let connection;

let player = {
  x: 0,
  y: 0,
};
//player object to keep track of position inside game
const handleUserInput = function(data) {
//handles user input data from keyboard to move snake around the game   
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
//sends pre-programmed messge to game based on e, r or t input
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