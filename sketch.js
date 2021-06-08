var door;
var doorClose,doorOpen;
var gameState = "openDoor";
var livingR;
var kitchenImg
var guitar,guitarImg;
var bedroomImg;
var keysImg,keys;
var i = 0;
var apples,appleImg;
var photo, photoImg;
var food, foodImg;
var t = 0;
var clock;
var treasure;

function preload(){
	doorClose = loadImage("door.jpg");
	doorOpen = loadImage("open-door.png");
	livingR = loadImage("bg1.png");
	guitarImg = loadImage("guitar.png");
	bedroomImg = loadImage("bedroom.png");
	keysImg = loadImage("keys.png");
	kitchenImg = loadImage("kitchen.jpg");
	appleImg = loadImage("apples.png");
	photoImg = loadImage("pic.jpg");
	foodImg = loadImage("pie.png");
	treasure = loadImage("Picture1.png");
}

function setup() {
	createCanvas(800, 800);
	door = createSprite(290,425,15,15);
	door.visible = false;
	guitar = createSprite(70,500,50,100);
	guitar.addImage(guitarImg);
   guitar.visible = false;
   keys = createSprite(750,285,20,20);
   keys.addImage(keysImg);
   keys.scale = 0.1;
   keys.visible = false;
   apples = createSprite(550,515,50,20);
	apples.addImage(appleImg);
	apples.scale = 0.35;
   apples.visible = false;
   photo = createSprite(350,250,50,50);
	photo.addImage(photoImg);
	photo.scale = 0.4;
   photo.visible = false;
   food = createSprite(300,700,50,50);
	food.addImage(foodImg);
	food.scale = 0.1;
   food.visible = false;
   clock = createSprite(80,230,30,30);
   clock.visible = false;
}


function draw() {
	background("white");
	imageMode(CENTER);
  if(gameState ==="openDoor"){
	image(doorClose,400,400,800,600);
	textSize(50);
	fill("blue");
	text("Open Door To Enter",200,75);
	textSize(20);
	fill("red");
	text("You are a treasure hunter \nand your searches for gold \nhave lead you to this house.\nSearch in these three rooms \nand find the hidden treasure.",275,250);
	  text("  Click left arrow(<-) and \nright arrow(->) to navigate",280,500);
	if(mousePressedOver(door)){
		i =1;
	}
  }
  if(gameState==="start"&&i===1){
	image(livingR,400,400,800,700);
	guitar.visible = true;
	keys.visible = false;
	apples.visible = false;
	photo.visible = true;
	food.visible = false;
	textSize(15);
	fill("black");
	stroke("red");
	strokeWeight(2);
	if(t===0){
	text("CLUE #1 - A 5 letter word that completes the phrase :  _____ of my eye and A rotten _____",130,100);
	}
	if(mousePressedOver(photo)&&t>=1){
		textSize(15);
		t= 2;
		fill("black");
		stroke("grey");
		strokeWeight(2);
		text("CLUE #3 - A wake-up call that can be anagrammed as MACK COLLAR.",150,100);
		}
		if(mousePressedOver(guitar)&& t>=4){
			textSize(15);
			fill("black");
			stroke("blue");
			strokeWeight(2);
			text("CLUE #6 - A three letter word that means the same as : Music Notes, Very Important, Door Opener.",120,100);
			t =5;
			}
}
	if(keyDown("LEFT_ARROW")){
		if(i!=4){
			i=i+1;
		}
	}
		if(keyDown("RIGHT_ARROW")){
			if(i>1){
				i=i-1;
			}
	}
	if(i===2){
		gameState = "bedroom";
	}
	if(i===3){
		gameState ="kitchen";
	}
	if(i===1){
		gameState="start";
	}
  if(gameState==="bedroom"){
	image(bedroomImg,400,400,800,700);
	guitar.visible =false;
	keys.visible = true;
	apples.visible = false;
	photo.visible = false;
	food.visible = false;
	if(mousePressedOver(clock)&&t>=2){
		textSize(15);
		fill("black");
		stroke("yellow");
		strokeWeight(2);
		t=3;
		text("CLUE #4 - A mathematical constant as well as a sweet or savoury.",180,100);
		}
		if(mousePressedOver(keys)&&t>=5){
			t= 6;
			}
			if(t===6){
				textSize(25);
			fill("black");
			stroke("gold");
			strokeWeight(3);
			//treasure.scale(1);
			image(treasure,400,400,700,700);
			text("CONGRATULATIONS !!",250,100);
			}
}
	if(gameState==="kitchen"){
	image(kitchenImg,400,400,800,700);
	guitar.visible =false;
	keys.visible = false;
	apples.visible = true;
	photo.visible = false;
	food.visible = true;
	if(mousePressedOver(apples)&& t>=0){
	textSize(15);
	fill("black");
	stroke("green");
	strokeWeight(2);
	text("CLUE #2 - A legend concealed in a frame.",180,100);
	t =1;
	}
	if(mousePressedOver(food)&&t>=3){
		textSize(15);
		fill("black");
		stroke("blue");
		strokeWeight(2);
		t=4;
		text("CLUE #5 - A six letter word that can be paired with air/electric/lead.",180,100);
		}
}
  drawSprites();
  /*if(mousePressedOver(guitar)&&gameState==="start"){
	  	textSize(20);
		text("hwdjkjk",100,300);
		gameState ="guitarPressed";

}*/
}


