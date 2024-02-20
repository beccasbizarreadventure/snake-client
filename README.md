# Snake Client Project

Snake game is a video game concept where the player maneuvers a little snake like object and grows it by ‘eating’ pieces of food in form of pixel shapes. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies and it's game over. 

This version of Snake game is a heavily modified version of the single player game Snek created by Tania Rascia 
(https://github.com/taniarascia/snek).

## Getting Started

- Follow these steps to set up your Snake Game server: 

    - `git clone https://github.com/lighthouse-labs/snek-multiplayer.git`
    - `cd snek-multiplayer`
    - `npm install`

- Open a second terminal and follow these steps to set up your Snake Game client: 

    - `git clone git@github.com:beccasbizarreadventure/snake-client.git`
    - `cd snake-client`
    - `npm install`

## How to Play

- When you're ready, start up the server side with `npm run play`, followed by starting the client side with `node play.js`

- To move around: 

    - `Move up = W`
    - `Move down = S`
    - `Move left  = A`
    - `Move right = D`

- To exit the game: 
    
    - `Ctrl + C`

- To send a fun message: 

    - `I'll get you!! = Q`
    - `Too easy! = E`
    - `Oh no!! = R`

- Grow the snake bigger by running into the red pixels

- If you hit the edge of terminal, you die and the game will end

- If you hit yourself, you die and the game will end

- To restart and try again, press the commands to exit the game and run `node play.js` again

## Extra Info 

- The name of your Snake can optionally be changed to any 3 character combo through altering `const Name` found in the `constants.js` file within `snake-client` folder 
- If you have any issues with the IP or Port, they may also be altered in the `constants.js` file
- A known error in the game is if you press and hold one of the move keys for too long and crash into a wall, you will also get an error message along with the game ending 


# HAVE FUN!!