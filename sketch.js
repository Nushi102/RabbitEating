var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var redLeaf, redLeafImg;
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png")
}



function createOrangeLeaves() {
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.08;
  leaf.velocityY=1.5;
  leaf.lifetime=500
  leafg.add(leaf)
  rabbit.depth=leaf.depth
  rabbit.depth+=1
}

function createRedLeaves() {
  redLeaf=createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale=0.08;
  redLeaf.velocityY=1.5;
  redLeaf.lifetime=500;
  redLeafg.add(redLeaf)
  rabbit.depth=redLeaf.depth
  rabbit.depth+=1
}

function createApples() {
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.08;
  apple.velocityY=1.5;
  apple.lifetime=500;
  appleg.add(apple)
  rabbit.depth=apple.depth
  rabbit.depth+=1
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  appleg = createGroup()
  leafg = createGroup()
  redLeafg = createGroup()
}




function draw() {
  background(0);
  
  rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyDown("space")&&rabbit.y>=324)  {
    rabbit.velocityY = -10;
    }
    rabbit.velocityY = rabbit.velocityY + 0.8
    
  var select_sprites = Math.round(random(1,3));

  if (frameCount % 100 == 0){
    if (select_sprites == 1) {
      createApples();
    }
    else if (select_sprites == 2){
    createOrangeLeaves();
    }
    else{
      createRedLeaves()
    }
    if(rabbit.isTouching(appleg)){
      appleg.destroyEach()
      score=score+1
    }
    if(rabbit.isTouching(redLeafg)){
      redLeafg.destroyEach()
      score=score+2
    }
    if(rabbit.isTouching(leafg)){
      leafg.destroyEach()
      score=score-1
    }
  }

  
  drawSprites();
  fill("cyan")
  textSize(18)
  text("Food Eaten: " + score,250,30)
  
}