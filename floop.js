let ypos = 140;
let xpos = 80;
let xstep = 30;

function setup() {
  createCanvas(300, 300);
  noLoop();
}

function draw() {
  background(254);
  fill(254);
  noStroke();

  for (let i = 1; i < 10; i++) {
    ellipse(xpos + (xstep * i), ypos, 150, 150);
  }
}