const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computerplayer;
var playerbase,computerbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  var n=random(450,height-300) 
  
  //Create Player Base and Computer Base Object
playerbase=new PlayerBase(300,n,180,150);
player=new Player(285,playerbase.body.position.y-153,50,180);

computerbase=new ComputerBase(800,n,180,150);
computerplayer=new ComputerPlayer(785,computerbase.body.position.y-153,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.display()
   computerbase.display()

   //display Player and computerplayer
   player.display()
   computerplayer.display()

}
