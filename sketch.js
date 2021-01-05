const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bottom, leftSide, rightSide, ground, dustbinImg, bg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
	bg = loadImage("background.jpg");
}


function setup() {
	createCanvas(800, 400);

	dustbin = createSprite(645, 320, 105, 110);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.35;

	engine = Engine.create();
	world = engine.world;

	//creating bodies
	paper = new Paper();
	ground = new Ground();
	bottom = new DustBin(645, 370, 80, 10);
	leftSide = new DustBin(607, 325, 10, 112);
	rightSide = new DustBin(683, 325, 10, 112);
	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);

  Engine.update(engine);

	
  paper.display();
  bottom.display();
  leftSide.display();
  rightSide.display();
  ground.display();

  message();
  drawSprites();
 
}

function message(){
	fill("black");
	textSize(20);
	textStyle("bold");
	text("Press the UP arrow key to throw the trash", 200, 130);
	text("You must throw it into the dustbin and keep this house clean!", 110, 150);
}


function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y: -20})
	}
  }