var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25;
var wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35;
var door1,door2;
var keyImage,floorImage,key1;
var player,crown1,crownImage,timeit,counter;
var gamestate="start";

function setup() {
  createCanvas(1000,600)
  floor=createSprite(500,300)
  floor.addImage(floorImage)
  floor.scale=2.5;
  counter=0;
  

  wall1=createSprite(50,125,10,250)
  wall2=createSprite(50,475,10,250)
  wall3=createSprite(200,355,300,10)
  wall4=createSprite(200,245,300,10)
  wall5=createSprite(240,100,370,10)
  wall6=createSprite(70,170,40,60)
  key2=createSprite(240,170,60,60)
  key2.addImage(keyImage)
  key2.scale=0.2
  wall8=createSprite(345,210,10,60)
  wall9=createSprite(385,185,80,10)
  door1 = createSprite(430,140,10,90);
  wall10=createSprite(150,525,10,150)
  wall11=createSprite(220,425,10,150)
  wall12=createSprite(300,525,10,150)
  wall13=createSprite(350,425,10,150)
  wall14=createSprite(400,500,110,10)
  wall15=createSprite(450,425,10,150)
  wall16=createSprite(610,350,320,10)
  wall19=createSprite(525,250,150,10)
  wall28=createSprite(565,150,200,10)
  wall22=createSprite(665,200,10,100)
  wall23=createSprite(460,200,10,100)
  wall25=createSprite(715,250,100,10)
  wall26=createSprite(760,300,10,100)
   door2=createSprite(610,450,220,10)
  wall30=createSprite(505,530,10,150)
   wall31=createSprite(715,530,10,150)



  wall17 = createSprite(925,400,10,200);
  wall18 = createSprite(800,475,10,250);
  wall20 = createSprite(830,350,65,10);
  wall21 = createSprite(895,500,65,10);
  wall24 = createSprite(860,375,10,50);
  wall27 = createSprite(850,55,150,115);
  wall29 = createSprite(600,30,170,80);
  wall32 = createSprite(860,475,10,50);
   key1=createSprite(100,50)
   key1.addImage(keyImage)
   key1.scale=0.2;
   
  colourSprit(wall1)
  colourSprit(wall2)
  colourSprit(wall3)
  colourSprit(wall4)
  colourSprit(wall5)
  colourSprit(wall6)
  //colourSprit(wall7)
  colourSprit(wall8)
  colourSprit(wall9)
  colourSprit(wall10)
  colourSprit(wall11)
  colourSprit(wall12)
  colourSprit(wall13)
  colourSprit(wall14)
  colourSprit(wall15)
  colourSprit(wall16)
  colourSprit(wall17)
  colourSprit(wall18)
  colourSprit(wall19)
  colourSprit(wall20)
  colourSprit(wall21)
  colourSprit(wall22)
  colourSprit(wall23)
  colourSprit(wall24)
  colourSprit(wall25)
  colourSprit(wall26)
  colourSprit(wall27)
  colourSprit(wall28)
  colourSprit(wall29)
  colourSprit(wall30)
  colourSprit(wall31)
  colourSprit(wall32)
  door1.shapeColor="brown"
  door2.shapeColor="brown"
  crown1=createSprite(620,525,20,20)
 crown1.addImage(crownImage)
  crown1.scale=0.5;
 // crown1.debug=true;
  crown1.setCollider("circle",0,0,40)


  player=createSprite(20,50,20,20)

}

function preload()
{
  keyImage=loadImage("key.png")
  floorImage=loadImage("floor.jpg")
  crownImage=loadImage("crown.png")
}

function draw() {
  background(0,0,0);  
  drawSprites();
  if (keyDown(UP_ARROW)){
    player.y-=6;
  }else if(keyDown(DOWN_ARROW)){
    player.y+=6;
  }
  else if (keyDown(LEFT_ARROW)){
    player.x-=6;
  }else if(keyDown(RIGHT_ARROW)){
    player.x+=6;
  }
  player.collide(door1)

  if (player.isTouching(key1)){
  key1.destroy();
  door1.destroy();
  }
  if (player.isTouching(key2)){
  key2.destroy();
  door2.destroy();
  }
  if(player.isTouching(crown1)){
    console.log("hide")

    gamestate="over";
  }

  if(gamestate=="over"){
    textSize(50)
    fill("black")
    text("You won",width/2-100,height/2)
  }
  if( counter==30){
 gamestate="out"
  }
  if(gamestate=="out"){
    textSize(50)
    fill("black")
    text("Time out",width/2-100,height/2)
    player.setVelocity(0.0)
  }
if(gamestate=="start"){
 // setInterval(time,5000)
if(frameCount%40==0)
time()
}
 textSize(30)
  fill("black")
  text("Time :"+counter,width-200,100)
  colision();
 
}

function colourSprit(s){
  s.shapeColor= "white"
} 
function time( )
{
  counter+=1
 
}
function  colision(){
  player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  //player.collide(wall7)
  player.collide(wall8)
  player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  player.collide(wall15)
  player.collide(wall16)
  player.collide(wall17)
  player.collide(wall18)
  player.collide(wall19)
  player.collide(wall20)
  player.collide(wall21)
  player.collide(wall22)
  player.collide(wall23)
  player.collide(wall24)
  player.collide(wall25)
  player.collide(wall26)
  player.collide(wall27)
  player.collide(wall28)
  player.collide(wall29)
  player.collide(wall30)
  player.collide(wall31)
  player.collide(wall32)


}