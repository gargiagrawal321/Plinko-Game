const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.body;

var ground1;
var plinkos=[];
var particles=[];
var divisions=[];
var divisionsHeight=200;

function setup() {
  createCanvas(600,800);
  engine=Engine.create()
  world=engine.world;
  for(var k=20;k<width;k=k+80){
    divisions.push(new Division(k,height - divisionsHeight/2,10,divisionsHeight));
 }
 for (var g = 30; g <width; g = g + 50){
   plinkos.push(new Plinko(g,150));
 } 
 for (var g=30;g<width;g=g+50){
  plinkos.push(new Plinko(g,250));
} 
for (var g=30;g<width;g=g+50){
  plinkos.push(new Plinko(g,350));
} 
for (var g=30;g<width;g=g+50){
  plinkos.push(new Plinko(g,450));
} 
ground1=new Ground(300,790,600,10);

Engine.run(engine);

}

function draw() {
  background("pink");  
  drawSprites();
  console.log(frameCount);
  ground1.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-250,width/2+250),10,10));
}
for(var i=0 ;i<divisions.length ;i++){
  divisions[i].display();
}
for(var g=0 ;g<plinkos.length ;g++){
  plinkos[g].display();
}
for(var g=0 ;g<particles.length ;g++){
  particles[g].display();
}

}