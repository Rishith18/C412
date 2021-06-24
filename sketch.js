const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var choice;

function preload(){
    thunderImage1 = loadImage("images/thunderbolt/1.png")
    thunderImage2 = loadImage("images/thunderbolt/2.png")
    thunderImage3 = loadImage("images/thunderbolt/3.png")
    thunderImage4 = loadImage("images/thunderbolt/4.png")
}

drops = [];

function setup(){
   createCanvas(300,700);
    
   engine = Engine.create();
   world = engine.world;

   var maxDrops= 100;
   for (var i=0; i<maxDrops; i++) {
       drops.push(new Drops(random(0,300),random(0,400)));
   } 
   man = new Man(150,600);

   thunder = createSprite(10,10,70,70);
   thunder.addImage("thunder1",thunderImage1);
   thunder.addImage("thunder2",thunderImage2);
   thunder.addImage("thunder3",thunderImage3);
   thunder.addImage("thunder4",thunderImage4);
   thunder.visible = true;

   Engine.run(engine);
}

function draw(){
    background(0);
    fill("blue");
    for(i=0;i<drops.length;i++){
        drops[i].display();
    }
    
        for (i=0;i<drops.length;i++) {
            drops[i].updatePosition();
        }
    man.display();

    choice=Math.round(random(1,4));
    console.log(choice);
    switch(choice) {
        case 1:
            thunder.visible = true;
            thunder.changeImage("thunder1",thunderImage1);
        case 2:
            thunder.visible = true;
            thunder.changeImage("thunder2",thunderImage2);
        case 3:
            thunder.visible = true;
            thunder.changeImage("thunder3",thunderImage3);
        case 4:
            thunder.visible = true;
            thunder.changeImage("thunder4",thunderImage4);
    }
    drawSprites();
}   

