shrink = 0.5*Math.sqrt(2);

var c = document.getElementById("myCanvas");
var drawing = c.getContext("2d");

var length = 100;
var stop = 1;
drawing.fillStyle = "#995500";

function turn(direction){
  // Turns one eighth of a circle
  if(direction=="right"){
    drawing.rotate(Math.PI/4);
  };
  if(direction=="left"){
    drawing.rotate(-Math.PI/4);
  };
};

function getColor(length){
  var color = Math.floor(length/shrink)+10;
  if(color<10){
    color = "0"+color;
  };
  return color;
};

//origin van canvas op 300,300 zetten
drawing.translate(400,400);
turn("left");

// Misschien moeten we wel twee recursion functies maken,
// Eentje voor links doorgaan, en eentje voor rechts doorgaan ?
function recursion(length){
  length = shrink*length;
  
  // Teken de linkse
  turn("left");
  drawing.fillStyle = "#"+getColor(length)+"5500";
  drawing.fillRect(0,0,length,length);
  
  // Ga door links
  if(length > stop){
    drawing.translate(length,0);
    recursion(length);
    
    // Ga terug
    turn("right");
    drawing.translate(-length,-length);
  };
     
  // Teken de rechtse
  turn("right");
  drawing.translate(0,length/shrink);
  turn("left");
  drawing.fillStyle = "#"+getColor(length)+"5500";
  drawing.fillRect(0,0,length,length);
 
  // Ga door rechts
  if(length > stop){
    drawing.translate(length,0);
    turn("right");
    turn("right");
    drawing.translate(length,0);
    recursion(length);
    
    // Ga terug
    turn("right");
    drawing.translate(-length,0);
    turn("left");
    turn("left");
  };
};

// Teken de eerste
drawing.translate(length,0);
turn("left");
drawing.fillRect(0,0,shrink*length,shrink*length);
drawing.translate(shrink*length,0);

// Teken de rest
recursion(shrink*length);
