var GameState = {
  preload: function() {
  	this.load.image('space', 'pict/pole.png');
  	this.load.image('O', 'pict/O.png');
  	this.load.image('X', 'pict/X.png');



},
create: function() {
 	this.game.add.sprite(50,50,'space');
 	this.game.add.sprite(50,250,'space');
 	this.game.add.sprite(50,450,'space');
 	this.game.add.sprite(200,50,'space');
 	this.game.add.sprite(200,250,'space');
 	this.game.add.sprite(200,450,'space');
 	this.game.add.sprite(50,50,'space');
 	this.game.add.sprite(250,250,'space');
 	this.game.add.sprite(450,450,'space');

},
update: function() {

  },

  Click: function() {
    
  },

};

var game = new Phaser.Game(1000, 1000, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');