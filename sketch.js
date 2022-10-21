
var trex ,trex_img;
var ground,ground_img

function preload(){
  trex_img=loadAnimation ("trex1.png", "trex3.png","trex4.png")
  ground_img=loadImage ("ground2.png")

}

function setup(){
  createCanvas(600,200)
 trex = createSprite (50,160,20,50)
 trex.addAnimation ("Images",trex_img)
 ground = createSprite (200,180,400,20)
 ground.addImage ("Img", ground_img)
  //create a trex sprite
  trex.scale=0.6
 
}

function draw(){
  background("black")


  trex.collide (ground)
  if (keyDown ("space")){
    trex.velocityY=-10

    
  }
 
  trex.velocityY=trex.velocityY+1
  ground.velocityX=-10
  if (ground.x<0) {
    ground.x=ground.width/2
  }

  
   
drawSprites ()
}
