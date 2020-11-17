var box1,box2;

function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 10, 10);

  box2 = createSprite(200,100,20,20);

  box3 = createSprite(200,200,30,30);
  box3.velocityY = -5;
 
}

function draw() {
  background(255,255,255);  

  box1.x = mouseX;
  box1.y = mouseY;

  if (box1.x-box2.x<box1.width/2+box2.width/2&&box2.x-box1.x<box1.width/2+box2.width/2&&box1.y-box2.y<box1.height/2+box2.height/2&&box2.y-box1.y<box1.height/2+box2.height/2){
      box1.shapeColor = "red";
      box2.shapeColor = "red";
  }
else{
  box1.shapeColor = "blue";
      box2.shapeColor = "blue";
}

if (box2.x-box3.x<box2.width/2+box3.width/2&&box3.x-box2.x<box2.width/2+box3.width/2&&box2.y-box3.y<box2.height/2+box3.height/2&&box3.y-box2.y<box2.height/2+box3.height/2){
    box3.velocityX =-1*(box3.velocityX) ;
    box3.velocityY =-1*(box3.velocityY) ;
    box2.velocityX =-1*(box2.velocityX) ;
    box2.velocityY =-1*(box2.velocityY) ;
}


  drawSprites();
}