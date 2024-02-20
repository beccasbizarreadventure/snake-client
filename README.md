# Snake Client Project

Snake game is a video game concept where the player maneuvers a little snake like object and grows it by ‘eating’ pieces of food in form of pixel shapes. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies and it's game over. 

This version of Snake game is a heavily modified version of the single player game Snek created by Tania Rascia. It supports single player and multiplayer options. 

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Getting Started

- Follow these steps to set up your Snake Game server in Vagrant/Windows Terminal: 

    - `git clone https://github.com/lighthouse-labs/snek-multiplayer.git`
    - `cd snek-multiplayer`
    - `npm install`

- Open a split tab by right clicking on the current tab in the same window and follow these steps to set up your Snake Game client in Vagrant/Windows Terminal: 

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

## Multiplayer Option

- The game should currently be set up for you to play by yourself on your own computer. If you want to play with others who are on your same local network: in the `snake-client` folder, go into the file for `constants.js` and update the IP according to your own local network IP 
- As long as the other person you want to play with has also followed the 'Getting Started' instructions along with 'How to Play' and also has set the same local network IP, everything should be good to go!

## Extra Info 

- The name of your Snake can optionally be changed to any 3 character combo through altering `const Name = "xxx"` found in the `constants.js` file within `snake-client` folder 
- If you have any conflicting issues with the IP or Port, they may also be altered in the `constants.js` file
- A known error in the game is if you press and hold one of the move keys for too long and crash into a wall, you will also get an error message along with the game ending 
