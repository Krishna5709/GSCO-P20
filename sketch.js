var deformation;
var bullet;
var speed,weight;
var wall,thickness;
function setup(){
createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83)
bullet = createSprite(50,200,50,50);
wall = createSprite(1200,200,thickness,height/2);
bullet.velocityX = speed;
}
function draw(){
  background("white");
  if(hasCollided(bullet,wall)){
  
  }
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var deformation = (0.5 * weight * speed * speed)/22509; 
  
  if(deformation<100){
bullet.shapeColor = (0,255,0);
}
if(deformation > 100 && deformaton < 180){
bullet.shapeColor = (230,230,0);  
}    
if(deformation>180){
bullet.shapeColor = (255,0,0);  
}  
}
drawSprites();
}
