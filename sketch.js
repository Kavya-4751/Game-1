var ground

var knight, witch, elf, magician
var knightImage, witchImage, elfImage, magicianImage
var sword, bowArrow, wand
var swordImage, bowArrowImage, wandImage

var fire, dragon, darkWitch, tree
var fireImage, dragonImage, darkWitchImage, treeImage

var spell
var spellImage

var magicianGroup

function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  ground = createSprite(600,600,2500,20)
  witch = createSprite(100,500,100,100);
  witch.shapeColor = "plum"
  //spell = createSprite(10,10,300,300);
  //dragon = createSprite(40,40,800,300);
  //darkWitch = createSprite();
  //tree = createSprite();
  magicianGroup = new Group()
  
}

function draw() {
  background(255,255,255);  
  text(mouseX+ "," +mouseY,mouseX,mouseY)
 
  if(keyDown("space")){
    witch.velocityY = -12
  }
  witch.velocityY += 0.8
  witch.collide(ground)
  ground.velocityX=-4

  if(ground.x<0){
    ground.x=ground.width/2
  }
  Obstacle()
  
  if(witch.isTouching(magicianGroup)){
    ground.velocityX = 0
    magicianGroup.setVelocityXEach = 0
  }

  drawSprites();
}

function Obstacle(){
  if(World.frameCount % 100 ===0){
    var magician = createSprite(1180,Math.round(random(200,500)),100,100)
    magician.shapeColor="blue"
    magician.velocityX = -7
    magicianGroup.add(magician)
  }

}