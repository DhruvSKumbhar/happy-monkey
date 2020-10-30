var survivalTime;
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
 createCanvas(600,400) ;
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.1;

 ground = createSprite(400,350,1200,10);
 ground.velocityX = -4;
 ground.x = ground.width /2;
 console.log(ground.x);
 
 obstacleGroup = createGroup();
 FoodGroup = createGroup();
 
  survivalTime = 0;
  
}


function draw() 
{
 background(220);
 stroke("black");
 textSize(20);
 text("survival Time: " +survivalTime,220,50);
 survivalTime = Math.ceil(frameCount/frameRate());
  
 if(ground.x<0)
 {
  ground.x = ground.width/2;
 }
  
 if(keyDown("space")&&monkey.y>=314.3)
 {
  monkey.velocityY = -12;
 }
  
  monkey.velocityY = monkey.velocityY + 0.8; 
  console.log(monkey.y);
  
  
  
  monkey.collide(ground);
  spawnObstacles();
  spawnFood();

  drawSprites();
}

function spawnObstacles()
{
  if(frameCount % 300 === 0)
  {
    var obstacle = createSprite(600,315,30,30);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
  }
  

}

function spawnFood()
{
  if(frameCount % 80 === 0)
  {
   var food = createSprite(600,100,40,10);
   food.y = Math.round(random(160,300)); 
   food.addImage(bananaImage);
   food.velocityX = -7;
   food.scale = 0.1;
   food.lifetime = 100;
   FoodGroup.add(food);
  }

}

