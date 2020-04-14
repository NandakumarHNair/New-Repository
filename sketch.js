var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600, 300, 40, 20);
}

function draw() {
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y <= movingRect.width/2 + fixedRect.width/2){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    } else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
  drawSprites();
}