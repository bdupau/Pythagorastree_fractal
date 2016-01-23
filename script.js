
shrink = 0.5*Math.sqrt(2);

var c = document.getElementById("myCanvas");
var drawing = c.getContext("2d");

var length = 100;
var stop = 50;
drawing.fillStyle = "#ff9900";

//origin van canvas op 300,300 zetten
drawing.translate(300,300);
drawing.rotate(-Math.PI/4);

// Misschien moeten we wel twee recursion functies maken,
// Eentje voor links doorgaan, en eentje voor rechts doorgaan ?
function recursion(length){
	// Teken de linkse
 	drawing.rotate(-Math.PI/4);
 	drawing.fillRect(0,0,shrink*length,shrink*length);

 	// Ga door links
  if(length > stop){
    drawing.translate(shrink*length,0);
    recursion(shrink*length);
	};
  
	// Teken de rechtse
	drawing.rotate(Math.PI/4);
	drawing.translate(0,length);
	drawing.rotate(-Math.PI/4);
 	drawing.fillRect(0,0,shrink*length,shrink*length);
    
  // Ga door rechts
  if(length > stop){
    drawing.translate(shrink*length,0);
    drawing.rotate(Math.PI/2);
    drawing.translate(shrink*length,0);
    recursion(shrink*length);
  };
  
  // Ga terug
  drawing.rotate(Math.PI/4);
  drawing.translate(-length,-length);
};

// Teken de eerste
drawing.translate(length,0);
drawing.rotate(-Math.PI/4);
drawing.fillRect(0,0,shrink*length,shrink*length);
drawing.translate(shrink*length,0);

// Teken de rest
recursion(shrink*length);
