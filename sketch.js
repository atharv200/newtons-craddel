
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof1
var bob1, bob2,bob3,bob4,bob5
var chain1,chain2,chain3,chain4,chain5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	

	roof1 = new roof(400,200,500,50)
    bob1 = new bob(220,500,40)
	bob2 = new bob(300,500,40)
	bob3 = new bob(380,500,40)
	bob4 = new bob(460,500,40)
	bob5 = new bob(540,500,40)

	chain1 = new chain(bob1.body,roof1.body,-90*2,0)
	chain2 = new chain(bob2.body,roof1.body,-50*2,0)
	chain3 = new chain(bob3.body,roof1.body,-10*2,0)
	chain4 = new chain(bob4.body,roof1.body,30*2,0)
	chain5 = new chain(bob5.body,roof1.body,70*2,0)
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

roof1.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()



}

function keyPressed(){
	if(keyCode==UP_ARROW){
        Body.applyForce(bob5.body,bob5.body.position,{x:85,y:85})
	}
}


