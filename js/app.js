//class is a newer syntax ES6+ while the constructor version has been around for a while.
//Below is a class declaration
//add a comment

let sprite = 'images/char-princess-girl.png'
class Player {
  constructor(sprite) {
    //101 is the width of each block and 83 is the height. Found from engine.js
    this.xValue = 101;
    this.yValue = 83;
    this.width = 101;
    this.height = 171;
    //We want to start at a distance of 101 *2 horizontally
    this.xStart = 202;
    //We want to start at a distance of 83 *5 vertically
    this.yStart = (this.yValue * 5) - 20;
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
    if (keyValue == 'ArrowDown' && this.y < 332) {
      this.y = this.y + 83;
      console.log(this.y);
    }


  }



  update() {
    for (let enemy of allEnemies) {



      if(this.y === enemy.y && (enemy.x + enemy.width/2 > this.x  && enemy.x < this.x + this.width/2)){
                       this.reset();
}




      else {
      console.log("no collison");
      }


    }


  }

  reset() {
    this.x = this.xStart;
    this.y = this.yStart;
  }

}

// Enemies our player must avoid
class Enemy {

  constructor(x, y, speed) {
    this.x = x;
    //so it starts a little above the edge of the row
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.xValue = 101;
    this.yValue = 83;
    this.width = 101;
    this.height = 171;

  }


  // Parameter: dt, a time delta between ticks
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for all computers.
  //ensure enemy keeps looping.
  update(dt) {
    if (this.x < 505) {
      this.x = this.x + this.speed * dt;
    } else {
      this.x = 0;
    }

  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  }


};

//create our player and enemy objects
const player = new Player(sprite);
const enemy1 = new Enemy(0, 146, 200);
const enemy2 = new Enemy(303, 229, 200);
const enemy3 = new Enemy(166, 312, 150);

const allEnemies = [];

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);


document.addEventListener('keyup', function(e) {

  player.handleInput(e.key);







});
