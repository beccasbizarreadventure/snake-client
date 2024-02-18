let connection;

let player = {
  x: 0,
  y: 0,
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