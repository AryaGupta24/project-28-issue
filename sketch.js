const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var tree2 , tree2img;
function preload(){
	boyImg = loadImage("boy.png");
	tree2img = loadImage("tree.png");
}

function setup(){
	createCanvas(1350, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(675, 665, 1350, 20);
	tree1 = new tree(1050, 350, 5, 5);
	stone1 = new stone(150, 550);
	mango1 = new mango(1070, 250);
	mango2 = new mango(1000, 250);
	mango3 = new mango(1150, 300);
	mango4 = new mango(900, 280);
	mango5 = new mango(1250, 250);
	mango6 = new mango(1070, 150);
	boy1 = new Boy(stone1.body,{x:150, y:550 });
	Engine.run(engine);
}


function draw(){
	rectMode(CENTER);
	background(255);
	boy = createSprite(200, 600, 50, 50);
	boy.addImage(boyImg);
	boy.scale = 0.099;
	tree1.display();
	tree2 = createSprite(1050, 350, 350, 650);
	tree2.addImage(tree2img);
	tree2.scale = 0.5;
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	stone1.display();
	boy1.display();
	ground.display();
	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y:mouseY})
}

function mouseReleased(){
    boy1.fly();
}