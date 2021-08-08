const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let wall1,wall2,bridge;
let stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8;
var zombie,button;

var inwall1,inwall2;

function preload(){
  zombieImg = loadImage("assets/zombie.png");
  backgroundImage=loadImage("assets/background.png")
  stoneImg=loadImage("assets/stone.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  zombie = createSprite(width/2-950, height - 110);
  zombie.addImage("zombie",zombieImg);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  inwall1 = createSprite(width-100,height-100,200,100);
  
  button=createImg("assets/axe.png");
  button.position(width-200,height/2-50);
  button.size(50,50);
  button.mouseClicked(handleButtonPress);

  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall_options={
    isStatic:true
  };
  
  wall1 = new Base(width-1800,height-400,300,300,wall_options);
  wall2 = new Base(width- 150,height-400,300,300,wall_options);
  bridge =new Bridge(40,{x:20,y:550});
  Matter.Composite.add(bridge.body,wall2)
  jointLink = new Link(bridge,wall2);

  stone1 = Bodies.circle(width-800,height-1000,40);
  World.add(world,stone1);
  stone2 = new Bodies.circle(width-1000,height-1000,50);
  World.add(world,stone2);
  stone3 = new Bodies.circle(width-600,height-1000,50);
  World.add(world,stone3);
  stone4 = new Bodies.circle(width-800,height-1000,50);
  World.add(world,stone4);
  stone5 = new Bodies.circle(width-600,height-1000,50);
  World.add(world,stone5);
  stone6 = new Bodies.circle(width-300,height-1000,50);
  World.add(world,stone6);
  stone7 = new Bodies.circle(width-830,height-1000,50);
  World.add(world,stone7);
  stone8 = new Bodies.circle(width-800,height-1000,50);
  World.add(world,stone8);
}

function draw() {
  background(51);
  imageMode(CENTER);
  image(backgroundImage,width/2,height/2,windowWidth,windowHeight);

  Engine.update(engine);

  bridge.show();
  image(stoneImg,stone1.position.x,stone1.position.y,100,100);
  image(stoneImg,stone2.position.x,stone2.position.y,100,100)
  image(stoneImg,stone3.position.x,stone3.position.y,100,100)
  image(stoneImg,stone4.position.x,stone4.position.y,100,100)
  image(stoneImg,stone5.position.x,stone5.position.y,100,100)
  image(stoneImg,stone6.position.x,stone6.position.y,100,100)
  image(stoneImg,stone7.position.x,stone7.position.y,100,100)
  image(stoneImg,stone8.position.x,stone8.position.y,100,100)

  Engine.update(engine);
  drawSprites();

  zombie.bounceOff(inwall1);
  inwall1.visible=false;

}

function handleButtonPress(){
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}
