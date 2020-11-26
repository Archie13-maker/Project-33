const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var divisions=[];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var gameState="end";
var paRticle;
var turn=0;
function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  ground.display();

  noStroke();
  textSize(30);
  fill("white");
  text("500",15,530);
  text("500",90,530);
  text("500",170,530);
  text("500",250,530);
  text("100",330,530);
  text("100",410,530);
  text("100",490,530);
  text("200",570,530);
  text("200",650,530);
  text("200",730,530);

  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   
   //  particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(paRticle!=null){
     paRticle.display();

     if(paRticle.body.position>760){
       if(paRticle.body.position.x<360){
         score=score+500;
        paRticle=null;
        if(turn>=5) gameState="end";
       }
     }
   }
//mousePressed();
}
function mousePressed(){
  if (gameState !=="end"){
    score++;
    paRticle=new Particle(mouseX,10,10,10);
  }
}