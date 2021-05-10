var tom,jerry
var tomImage,jerryImage,catImage2
var bg
function preload() {
    //load the images here
    tomImage=loadImage("cat1.png")
    jerryImage=loadImage("mouse1.png")
    bg=loadImage("garden.png")
    catImage2=loadImage("cat2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(600,600,200,30)
    tom.addImage(tomImage)
    tom.scale=0.1
    jerry=createSprite(60,600,50,20)
  jerry.addImage(jerryImage)
  jerry.scale=0.1
}
  

function draw() {

    background(bg)
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    
    tom.addAnimation("catImage2",catImg2)
       tom.changeAnimation("catImage2")
   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("catImage2",catImg2)
    tom.changeAnimation("catImage2")



}

}
