//creating the variables trex and the ground
var trex ,trex_running;
var ground, groundImage;
var invisibleGround;
var cloud, cloudImage;


function preload(){
  //loading the ground image
  groundImage = loadImage ("ground2.png");
  //loading the trex animation
  trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png");
  //loading the cloud image
  cloudImage = loadImage ("cloud.png");
}


function setup(){
  
  //creating the canvas for our game
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(60, 170);
  //giving the animation to the trex
  trex.addAnimation("trexRunning", trex_running);
  //scaling down the trex
  trex.scale = 0.4;

  //setting the position of the ground sprite
  ground = createSprite(300, 170, 800, 10);
  // giving the ground its image
  ground.addImage("ground", groundImage);
  //making the ground move to the left
  ground.velocityX = -4;
  
  //making the invisible ground
  invisibleGround = createSprite( 300, 174, 800, 10);
  //making the ground for the trex invisible
  invisibleGround.visible = false;

  var ran = Math.round(random(1, 20))
  console.log(ran);
}

function draw(){
  
  //making the background of the game black, it also clears tracing
  background("black");

  //making the trex jump whenever the spacebar is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10
    
  }  
  //console.log(trex.y);
  //gravity
  trex.velocityY = trex.velocityY + 0.8;
  //making the trex collide with the ground
  trex.collide(invisibleGround);

  //making the ground infinite
  if(ground.x <0){
    ground.x = ground.width/2;
  }
  //calling function cloud
  spawnClouds();
  drawSprites();
}

function spawnClouds(){

  //making the clouds spawn after 60fps/second
  if(frameCount%60===0){
    //creating the sprite for the cloud
    cloud = createSprite(600, 70)
    //add the image to the cloud
    cloud.addImage("cloud", cloudImage)
    //scaling down the cloud to be smaller
    cloud.scale = 0.5
    //making the speed of the clouds
    cloud.velocityX = -4
    //making the cloud spawn in random positions
    cloud.y = Math.round(random(40, 100))
    //making the trex dpeth the same as the cloud depth
    trex.depth = cloud.depth
    //increasing the trex depth by one
    trex.depth = trex.depth + 1
    //trex.depth += 1
  }

  

}
