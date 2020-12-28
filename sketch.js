const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 800);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,200,30);
  mango2=new mango(1170,230,30);
	mango3=new mango(1010,240,30);
	mango4=new mango(1000,170,30);
	mango5=new mango(1100,170,30);
	mango6=new mango(1000,330,30);
	mango7=new mango(900,330,40);
	mango8=new mango(1140,250,40);
	mango9=new mango(1100,330,40);
	mango10=new mango(1200,300,40);
	mango11=new mango(1120,150,40);
	mango12=new mango(900,260,40);

	treeObj=new tree(1050,450);

	groundObject=new ground(width/2,800,width,20);
	launcherObject=new launcher(stoneObj.body,{x:210,y:620})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  textSize(25);
  text("Press down arrow! to get a second Chance to Play!!",50 ,50);
  image(boy ,150,540,300,350);

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  
  groundObject.display();
  launcherObject.display();
  

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
  
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }


  function detectollision(stone,mango){
	
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance <= mango.r + stone.r)
    {
     
  	  Matter.Body.setStatic(mango.body,false);
    }

  }
