const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,object,ground;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  var object_options  = {
   restitution:1.0 
  }
  
  object = Bodies.circle(200,100,20,object_options)
  World.add(world,ground);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode (CENTER);
 // rect (200,200,50,50);
 ellipseMode(RADIUS);
 ellipse(object.position.x,object.position.y,20);
rect (ground.position.x,ground.position.y,400,20);

}