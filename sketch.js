var fixedRect,movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect= createSprite(300,100,80,30);

  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="green";

  object1 = createSprite(100,300,50,50);
  object1.shapeColor="green";

  object2 = createSprite(300,300,50,50);
  object2.shapeColor="green";

  object3 = createSprite(200,100,50,50);
  object3.shapeColor="green";
  object3.velocityX=-2;

  object4 = createSprite(100,100,50,50);
  object4.shapeColor="green";
  object4.velocityX=2;
}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching(movingRect,object2)){
    object2.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    object2.shapeColor="yellow";
    movingRect.shapeColor="green";
  }
  bounceOff(object3,object4);
  drawSprites();
}

