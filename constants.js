const IP = "127.0.0.1";
const PORT = 50541;
const Name = "HSS";

const messages = {
  'q': "Say: I'll get you!!",
  'e': "Say: Too easy!",
  'r': "Say: Oh no!!"
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
  Name,
  messages,
  moveUp: moveKeys.Up,
  moveDown: moveKeys.Down,
  moveLeft: moveKeys.Left,
  moveRight: moveKeys.Right,
};