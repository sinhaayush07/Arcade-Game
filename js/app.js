// Enemies our player must avoid
var Enemy = function(x,y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.preX = x;
    this.preY = y;

};

// Updates the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // This ensures the game runs at the same speed for
    // all computers.
    for(let i=0; i<allEnemies.length; i++){
        allEnemies[i].speed=250;
    }

    this.x = this.x+(this.speed*dt);
    
    //reset the enemy position
    if(this.x > 500){
        this.reset();
    };
    
    //In case of collision with the enemiesS
    if( player.x >= this.x -50 && player.x <=this.x + 50 ){
        if( player.y >= this.y -50 && player.y <=  this.y+50 ){
            player.reset();
        }
    }
    //handling if the player reaches the blue line
    if(player.y <=20){
        console.log("you won")
        player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(){
    this.x = this.preX;
    this.y = this.preY;
}


/**
 * This is a player class that renders player's image and manages players position
 */
let Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y =y;
    this.preX = x;
    this.preY = y;
}

Player.prototype = {
    update : function(){
        return true;

    },
    render : function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    },
    handleInput : function(kyprs){
        if(kyprs === 'left' && this.x > 0){
            this.x = this.x-50
        }
        else if(kyprs === 'right' && this.x < 400){
            this.x = this.x + 50
        }
        else if(kyprs === 'up' && this.y > 0){
            this.y = this.y - 50
        }
        else if(kyprs ==='down' && this.y < 410){
            this.y = this.y + 50
        }
    },
    reset : function(){
        this.x = this.preX;
        this.y = this.preY;
    }
}


// All enemy objects are in an array called allEnemies
// The player object is in a variable called player
var enemy1 = new Enemy(-100,60);
var enemy2 = new Enemy(-160,140);
var enemy3 = new Enemy(-550,140);
var enemy4 = new Enemy(-650,60);
var enemy5 = new Enemy(-240,220);
var enemy6 = new Enemy(-450,220);
var enemy7 = new Enemy(-300,60);
var enemy8 = new Enemy(-300,140);


let allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8];

let player = new Player(0,400)

// This listens for key presses and sends the keys to 
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
