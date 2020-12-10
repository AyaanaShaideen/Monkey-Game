
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0; 
var bananaGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
monkey=createSprite(80,315,20,20) 
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  ground=createSprite(250,350,1000,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  bananaGroup= createGroup();
  obstacleGroup= createGroup();
}


function draw() {
background("lightblue");  
if(keyDown("space")&&monkey.y>314.2){
  monkey.velocityY= -15;
}
  food();
  obstacles();
if(ground.x<0){
  ground.x= 250;
}

monkey.velocityY = monkey.velocityY + 0.9  
monkey.collide(ground);
drawSprites();
}
function food(){
  if (frameCount %80===0){
    var banana = createSprite(600,Math.round(random(120,200),10,40))
    banana.velocityX = -(9+ score/100);
    banana.lifetime = 200;
    banana.addImage(bananaImage);
    banana.scale= 0.1;
    bananaGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount %100===0){
    var obstacle = createSprite(400,330,10,50);
    obstacleGroup.add(obstacle);
    obstacle.velocityX = -9;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
  }
}






