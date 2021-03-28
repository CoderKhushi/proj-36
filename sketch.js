var dog,sadDog,happyDog;
var foodObj
var fedTime,lastfed

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk=loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
 
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("feed the dog")
  feed.position(500,100)
  feed.mousePressed(feeddog())


  
  addfood=createButton("Add the feed")
  addfood.position(500,100)
  addfood.mousePressed(getFoodstock())
}

function draw() {
  background(46,139,87);
  drawSprites();

  fedTime=database.ref('feedTime')
  fedTime.on("value",function (data){
    lastFed=data.val()
  });
  fill("black")
  textSize(15)
  if(lastFed>=12){
  text("Last feed:"+lastFed%12 +"PM",350,30)
  }
  else if(lastFed>=12){
    text("Last feed:12 AM",350,30)
    }
    else{
      text("Last feed:"+lastFed +"AM",350,30)
      }
}

function getFoodstock()
{
  for(var i=1;i=0;i--){
    var m=40
  Milk=createSprite(m+10,200,10,10)
Milk.addImage(milk)

}

}
//function to update food stock and last fed time
async function feeddog(){

dog.addImage(happyDog)
if(foodObj.getFoodstock()<=0){

  foodObj.updateFoodStock(getFoodStock()*0)
}
else{
  foodObj.updateFoodStock(getFoodStock()-1)
}
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

}

function deductFood(){
if(feed.buttonPressed()){
Milk.hide()
dog.addImage(happyDog)
}
        
}




//function to add food in stock
function addFoods(){
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  fedTime:hour
})
}
