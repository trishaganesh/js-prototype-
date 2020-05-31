let ypos = 100;
let xpos = 75;
let xstep = 50;

function setup() {
  createCanvas(300, 300);
  noLoop();
}

function draw() {
  background(254);
  fill(254);
  noStroke();

  ellipse(xpos + (xstep * 0), ypos, 150, 150);
  ellipse(xpos + (xstep * 1), ypos, 150, 150);
  ellipse(xpos + (xstep * 2), ypos, 150, 150);
  ellipse(xpos + (xstep * 3), ypos, 150, 150);
  ellipse(xpos + (xstep * 4), ypos, 150, 150);
}