
var car, wall
var speed,weight

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
car=createSprite(50,200,50,50)

wall=createSprite(1500,200,60,height/2)

car.velocityX=speed;


speed=random(55,90)
weight=random(400,1500)
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x   <    (car.width+wall.wall)/2){

car.velocityX=0
var deformation=0.5 *weight * speed * speed/22500
if(deformation>180)
{      

car.shapeColour=("red")(255, 0, 0)
wall.shapeColour=("white")
}

if(deformation<180 && deformation>180)

{

  car.shapeColour=("yellow")(230, 230, 0)
  wall.shapeColour=("white")
}


if(deformation<100)
{      

  car.shapeColour=("green")(0, 255, 0)
  wall.shapeColour=("white")

}
car.collide(wall)

}


  drawSprites();
}