
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background.shapeColor  = "white"


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(200,650,1500,20);
	paper1 = new paper(100,480,40);
	bin1 = new bin(600,550,200,20);
	bin1.shapeColor="blue";
	bin2 = new bin(500,610,20,100);
	bin2.shapeColor="blue";
	bin3 = new bin(700,610,20,100);
	bin3.shapeColor="blue";
	





	Engine.run(engine);
  
}


function draw() {
  background(200);
  paper1.display();
  ground1.display();
  bin1.display();
  bin2.display();
  bin3.display();

 
  
  
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-30});		
}

}


