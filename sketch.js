
var ground;
var paper;
var log1,log2,log3;
var options={
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2,

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);
 //. World.add(world,ground)

paperSprite=createSprite(height-35,20,10,10)
paperSprite.scale=4;

	//Create the Bodies Here.
  groundSprite=createSprite(width/2,height-35,height,width,10);
  groundSprite.shapeColor=color(255)
  log1Sprite=createSprite(width/2,650,200,20)
  log2Sprite=createSprite(height-200,560,20,200)
  log3Sprite=createSprite(height-400,560,20,200)
  log1Sprite.shapeColor=color("red")
  log2Sprite.shapeColor=color("red")
  log3Sprite.shapeColor=color("red")

  engine = Engine.create();
  world = engine.world;
  
  paperBody = Bodies.circle(width/2,200,5,{restitution:1,isStatic:true});

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  paperSprite.x= paperBody.position.x
  paperSprite.y= paperBody.position.y
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
if (keyCode === DOWN_ARROW){
  Matter.Body.setStatic(paperBody, false);
}
}


