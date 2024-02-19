//const {conn} = require("./client");

let connection;

let player = {
  x: 0,
  y: 0,
};

const messages = {
  'e': "Say: I'll get you!!",
  'r': "Say: Too easy!",
  't': "Say: Oh no!!"
};

const handleUserInput = function(data) {
  
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    player.y += 1;
    connection.write("Move: up");
  }
  if (data === 's') {
    player.y -= 1;
    connection.write("Move: down");
  }
  if (data === 'a') {
    player.x -= 1;
    connection.write("Move: left");
  }
  if (data === 'd') {
    player.x += 1;
    connection.write("Move: right");
  }
  if (messages[data]) {
    connection.write(messages[data])
  };

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

// handlePlayerInput(input, client) {
//   const snake = this.snakes.find(s => s.client === client)
//   if (!snake) return false

//   const dir = input.match(/Move: (.*)/)
//   const name = input.match(/Name: (.*)/)
//   const say  = input.match(/Say: (.*)/)

