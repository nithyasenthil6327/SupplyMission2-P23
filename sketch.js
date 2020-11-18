var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	var option = {
		'restitution':0.4, 
		'isStatic':true

	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , option);
	World.add(world, packageBody);
	

	//Create a Ground
	var gr_option = {
		
		'isStatic':true

	}
	ground = Bodies.rectangle(width/2, 650, width, 10 , gr_option );
	 World.add(world, ground);
	 
	 rect1=createSprite(400,665,200,12,rect1Options);
	rect1.shapeColor=color(255,0,0);
	var rect1Options={
		isStatic : true
	}
	World.add(world, rect1);

	rect2=createSprite(305,620,10,100,rect2Options);
	rect2.shapeColor=color(255,0,0);
	World.add(world,rect2);
	var rect2Options={
		isStatic : true
	}

	rect3=createSprite(495,620,10,100,rect3Options);
	rect3.shapeColor=color(255,0,0);
	World.add(world,rect3);
	var rect3Options={
		isStatic : true
	}


	
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
  }
}