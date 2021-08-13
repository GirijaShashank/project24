
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400,670,800,20);

    line1 = new Dustbin(700,653,150,15);
	line2 = new Dustbin(625,620,15,80);
	line3 = new Dustbin(775,620,15,80);

	paper1 = new Paper(50,650,10);

}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  paper1.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:18,y:-15});
	}
}



