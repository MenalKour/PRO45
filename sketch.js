var bgImage,bg
var girl,girlImg
var ObstacleGroup
var gameState=1


var ground
var girl,girlImage
var girl_running
var img1,img2,img3,img4,img5,img6

function preload(){
bgImage=loadImage("candyland.jpg")
girl_running=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png","Run (9).png","Run (10).png","Run (11).png","Run (12).png","Run (14).png","Run (15).png","Run (16).png","Run (17).png","Run (18).png","Run (19).png","Run (20).png")


girlImage=loadImage("ggg.png")
img1=loadImage("1.png")
img2=loadImage("2.png")
img3=loadImage("3.png")
img4=loadImage("4.png")
img5=loadImage("5.png")
img6=loadImage("6.png")
}
function setup(){
    createCanvas(600,400)
    bg=createSprite(0,-200,800,400);
    bg.addImage(bgImage);
    bg.scale=1.5;
    bg.x=bg.width/2;
    bg.velocityX=-3.5;
    
    girl = createSprite(100,300,20,50);
    girl.addAnimation("girl_running",girl_running);
    girl.addImage("girlImage",girlImage);
    girl.scale=0.2
    //girl.scale = 0.1;
    
    ground = createSprite(400,300,800,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
    ground.visible=false;
    
    obstaclesGroup = new Group();
    
    
}
 function draw(){
      
  background(255);

  if (gameState===1){ 
   
 if(ground.x<0) {
   ground.x=ground.width/2;
 }
 if(bg.x<10){
   bg.x=bg.width/2;
 }
 
   
  
 
   if(keyDown("space") &&girl.y >= 100) {
     girl.velocityY = -12;
   }
   girl.velocityY = girl.velocityY + 0.8;
 
   girl.collide(ground);

   spawnObstacles();

   
 
 drawSprites();
 
 
  }
  if(obstaclesGroup.isTouching(girl)){ 
  gameState=2
}
else if(gameState===2){
 background(bgImage)
 bg.velocityX=0;
 girl.visible=false;
 
 obstaclesGroup.destroyEach();
 
 
} 
}
 
  
  
  function spawnObstacles() {
    if(frameCount % 120 === 0) {
      var obstacle = createSprite(800,280,10,40);
      obstacle.velocityX = -6;
       obstacle.y = random(250,280); 
       
      //assign scale and lifetime to the obstacle     
      obstacle.scale = 0.9;
      obstacle.lifetime = 300;
      var rand=Math.round(random(1,6))
      switch(rand){
        case 1:obstacle.addImage(img1)
        break;
        case 2:obstacle.addImage(img2)
        break;
        case 3:obstacle.addImage(img3)
        break;
        case 4:obstacle.addImage(img4)
        break;
        case 5:obstacle.addImage(img5)
        break;
        case 6:obstacle.addImage(img6)
        break;
        default:break;
      }
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
