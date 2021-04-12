
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope2, rope3, rope4, rope5, ball1, ball2, ball3, ball4, ground2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	
	ball1 = new Ball(300,400,50,50)
	rope2= new rope1 (ball1.body, ground2.body, 20,0); 
	ground2= new Ground(400,200,500,20)

	ball2 = new Ball(300,400,50,50)
	rope3= new rope1 (ball2.body, ground2.body, 20,0); 
	
	ball3 = new Ball(300,400,50,50)
	rope4= new rope1 (ball3.body, ground2.body, 20,0); 
	
	ball4 = new Ball(300,400,50,50)
	rope5= new rope1 (ball4.body, ground2.body, 20,0); 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ground2.display();

  ball2.display();
  ball3.display();
  ball4.display();
  

  drawSprites();
 
}



