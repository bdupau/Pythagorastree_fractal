shrink = 0.5 * Math.sqrt(2);
var c = document.getElementById("myCanvas");
var drawing = c.getContext("2d");
var length = 100;
var stop = 1;

function turn(direction) {
  // Turns one eighth of a circle
  if (direction == "right") {
    drawing.rotate(Math.PI / 4);
  };
  if (direction == "left") {
    drawing.rotate(-Math.PI / 4);
  };
};

function move(direction, distance) {
  // Moves the origin in a certain direction
  if (direction == "forward") {
    drawing.translate(distance, 0);
  };
  if (direction == "backward") {
    drawing.translate(-distance, 0);
  };
  if (direction == "right") {
    drawing.translate(0, distance);
  };
  if (direction == "left") {
    drawing.translate(0, -distance);
  };
};

function getColor(length) {
  // Returns color between brown and green
  // Depending on the size of the square
  var color = Math.floor(length)+15;
  if (color < 10) {
    color = "0" + color;
  };
  if (color > 99) {
    color = "AA";
  };
  return "#" + color + "5500";
};

function drawBlock(length) {
  drawing.fillStyle = getColor(length);
  drawing.fillRect(0, 0, length, length);
}

function drawSubTree(length) {
  move("forward", length);
  
  length = shrink * length;
  
  // Teken de linkse
  turn("left");
  drawBlock(length);

  // Ga door links
  if (length > stop) {
    drawSubTree(length);

    // Ga terug
    turn("right");
    move("backward", length);
    move("left", length);
  };

  // Teken de rechtse
  move("backward", length);
  move("right", length);
  drawBlock(length);

  // Ga door rechts
  if (length > stop) {
    move("forward", length);
    turn("right");
    turn("right");
    drawSubTree(length);

    // Ga terug
    turn("right");
    move("backward", length);
    turn("left");
    turn("left");
  };
};

// Origin van canvas op 300, 400 zetten
drawing.translate(300, 400);

// Teken de stam
turn("left");
turn("left");
drawBlock(length);

// Teken de rest van de boom
drawSubTree(length);
