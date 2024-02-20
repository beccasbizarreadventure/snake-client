const IP = "127.0.0.1";
const PORT = 50541;

const messages = {
  'e': "Say: I'll get you!!",
  'r': "Say: Too easy!",
  't': "Say: Oh no!!"
};

const moveKeys = {
  'Up': 'w',
  'Down': 's',
  'Left': 'a',
  'Right': 'd',
};

module.exports = {
  IP,
  PORT,
  messages,
  moveUp: moveKeys.Up,
  moveDown: moveKeys.Down,
  moveLeft: moveKeys.Left,
  moveRight: moveKeys.Right,  
};