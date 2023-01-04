var groundImg;
var mario1Img, mario2Img, mario3Img;
var coins, coinsImg;
var obstacles, obstaclesImg;

function preload(){
  mario1Img = loadImage("images/1.png", "images/3.png");
}

function setup() {
	createCanvas(800, 800);
  
	mario = createSprite(50, 400);
  mario.addImage("mario", mario1Img);

  
}

function draw() {
 
  background(230);
  

  drawSprites()
}









