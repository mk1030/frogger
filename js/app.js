//Constructor Function is a blueprint for Objects
//We can use constructors to ensure each object has the same properties and includes the same methods
//Think of a constructor like a little factory that can create an endless number of similar objects
//We need to create a constructor for player objects. A user will be able to select their player.
//Using constructors is a two-step process: define a constructor and then use it to create Objects
//We want a constructor that we can use to create players, and more specifically players with different names, images, getContext
//Player class
  //constructor
    //properties
      //The position a player is in via x and y coordinates
      // x position
      // y position
      // image
    //methods
      //update position -- this method get run every cycle of the game engine loop. It's checking
          //our Player's position on the board in relation to whatever we want.
            //Did enemey collide with player? check for collision function. -- are x and y coordinates equal to enemies?
            //Did it reach the top row of the grid -- check for victory that will check if the hero's x and y coordinates match that of the final tiles.
          //playerDraw -- draw or redraw our player to the board every loop through the main game loop.
              //Needs an image
              //Needs an x/y coordinate position
          //Keyboard handle input -- event lister to fire this method when key is pressed and make changes to x and y
          //Reset player
              // set x and y to starting x and y coordinates

//class is a newer syntax ES6+ while the constructor version has been around for a while.
//Below is a class declaration

let sprite = 'images/char-girl.png'
class Player {
  constructor(sprite ) {
    //101 is the width of each block and 83 is the height. Found from engine.js
    this.xValue = 101;
    this.yValue = 83;
    //We want to start at a distance of 101 *2 horizontally
    this.xStart = this.xValue * 2;
    //We want to start at a distance of 101 *5 vertically
    this.yStart = this.yValue * 5;
    this.x = this.xStart;
    this.y = this.yStart;
    this.sprite = sprite;

  }

  render() {
    //Resources
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }


  handleInput(keyValue) {

    //check to see what key was pressed
    //Also include checks to make sure player doesn't go off canvas...

    //PLayer can only move left if the position is positive
    if (keyValue == 'ArrowLeft' && this.x > 0) {
      this.x = this.x - 101;
    }

    //Player can only move right if it's less than the total width of the canvas
    if (keyValue == 'ArrowRight' && this.x < 404) {
      this.x = this.x + 101;
    }
    //Player can only move up as long as the position is positive.
    if (keyValue == 'ArrowUp' && this.y > 0) {
      this.y = this.y - 83;
    }

    //Player can only move doen as long as it doesn't exceed the height of the total canvas
    if (keyValue == 'ArrowDown' && this.y < 415) {
      this.y = this.y + 83;
    }


  }

update() {
  for (let enemy of allEnemies) {
console.log (this.y + "-" + enemy.y)

let enemyWidth = 101;
let enemyHeight = 171;

if ((this.x < enemy.x + enemy.enemyWidth) &&
   (this.x + this.xValue > enemy.x) &&
   (this.y < enemy.y + enemy.enemyHeight) &&
   (this.y + this.yValue > enemy.y)) {
  alert("collison!");
}




  }




}

}


// Enemies our player must avoid
class Enemy {

  // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //x and y position of enemy

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  constructor(x, y, speed) {
    this.x = x;
    //so it starts a little above the edge of the row
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.xValue = 101;
    this.yValue = 83;
  }

  // Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
  update(dt) {
    if (this.x < 505) {
      this.x = this.x + this.speed * dt;
    }

    else {
      this.x = 0;
    }

  }

// Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }


};






const player = new Player(sprite);
const enemy1 = new Enemy(0, 83, 100);
const enemy2 = new Enemy(83, 101, 200);
const enemy3 = new Enemy(166, 202, 150);

const allEnemies = [];

allEnemies.push(enemy1, enemy2, enemy3);


document.addEventListener('keyup', function(e) {

  player.handleInput(e.key);
});
