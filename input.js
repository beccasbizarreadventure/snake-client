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
    console.log("Move: up");
  }
  if (data === 's') {
    player.y -= 1;
    console.log("Move: down");
  }
  if (data === 'a') {
    player.x -= 1;
    console.log("Move: left");
  }
  if (data === 'd') {
    player.x += 1;
    console.log("Move: right");
  }

};

const setupInput = function() {
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