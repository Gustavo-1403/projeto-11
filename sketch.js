var barco, barco_img
var mar, mar_img

function preload(){
  mar_img = loadImage("sea.png");
  barco_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  



}

function setup(){
  createCanvas(1350,525);

  mar = createSprite(300,100,10,10);
  mar.addImage(mar_img)
  //mar.scale = 0.15
  mar.velocityX -=5
  barco = createSprite(300,400,40,40);
  barco.addAnimation("navegar",barco_img);
  barco.scale = 0.2;  

  

}

function draw() {
  background("blue");


if(mar.x  < 0){
  mar.x = mar.width/2;


 }


    drawSprites();




 
}
