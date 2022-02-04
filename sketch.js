var rocket,rocketImg;
var alien,alienImg,aliensGroup;
var space,spaceImg;
var star,starImg,starsGroup;
var gameState = "play";
var score = 0;

function preload(){
rocketImg = loadImage("rocket.png");
spaceImg = loadImage("space.jpg");
starImg = loadImage("star.png");
alienImg = loadImage("alien.png");

}

function setup() {
createCanvas(600,600);
starsGroup = new Group();
aliensGroup = new Group();
space = createSprite(300,300);
space.scale = 1.60;
space.addImage("space",spaceImg);
space.velocityY = 1;
space.rotation = -90
rocket = createSprite(250,500,50,50);
rocket.scale = 0.05;
rocket.rotation = -45;
rocket.addImage("rocket",rocketImg);
}

function draw() {
 if(gameState === "play"){

 if(space.y > 400){
 space.y = 300;
 }
 score = score + 1;

 fill("white");
 stroke("white");
textSize(30);
text("score :" + score, 60,60);

 if(keyDown("left_arrow")){
     rocket.x = rocket.x - 4;
 }

 if(rocket.x < 25){
     rocket.x = 25;
 }

 if(keyDown("right_arrow")){
     rocket.x = rocket.x + 4
 }

 if(rocket.x > 575){
     rocket.x = 575;
 }

 if(aliensGroup.isTouching(rocket)){
     gameState = "end";
 }

 if(starsGroup.isTouching(rocket)){
star.destroy();
 }
 
 spawnStars();
 spawnAliens();

 }
 if(gameState === "end"){
background(0);     
space.velocityY = 0;
alien.velocityY = 0;
star.velocityY = 0;
stroke("green");
fill("green")
textSize(30);
text("Game Over",225,300);
alien.destroy();
star.destroy();
rocket.destroy();
space.destroy();

 }

  drawSprites();
}

function spawnStars(){
if(frameCount % 120 === 0){
  star = createSprite(300,300);
  star.addImage(starImg);
  star.x = Math.round(random(50,550));
  starsGroup.add(star);
  star.scale = 0.03;
  star.velocityY = star.velocityY + 3;
  star.lifetime = 600;

}
}

function spawnAliens(){
if(frameCount % 160 === 0){
 alien = createSprite(300,300);
 alien.addImage(alienImg);
 alien.x = Math.round(random(50,550));
 aliensGroup.add(alien);
 alien.scale = 0.05;
 alien.velocityY = alien.velocityY + 3;
 star.lifetime = 600;
}
}