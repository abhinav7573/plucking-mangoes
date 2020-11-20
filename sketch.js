
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var stone,tree,ground;
var mango1,mango2,mango3,mango4

function preload()
{
boyImage=loadImage("images/boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone= new Stone(240,535,40)
  sling= new SlingShot(stone.body,{x:240,y:535})
	ground= new Ground(400,650,800,15)
	tree = new Tree(500,450,300,400);
  mango1= new Mango(395,450,40);
  mango2= new Mango(450,340,40);
  mango3= new Mango(530,360,40);
  mango4= new Mango(540,420,40);
	Engine.run(engine);
  
}


function draw() {
  
  background("skyBlue");
  // text("X: "+mouseX+" , Y: "+mouseY, 200,200);
  rectMode(CENTER);
  image(boyImage,200,500,200,200)
  tree.display();
  stone.display();
  sling.display();
  ground.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

   detectCollision(stone,mango1);
   detectCollision(stone,mango2 );
   detectCollision(stone,mango3);
   detectCollision(stone,mango4);
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:240,y:535})
  sling.attach(stone.body)
}
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false)
  }
}


