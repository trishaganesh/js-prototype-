let ypos = 140;
let ystep = 30;
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
    ellipse(xpos+(xstep*i), ypos+(ystep*0), 150, 150);
  }
  for (let i = 1; i < 10; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*1), 150, 150);
  }
  for (let i = 1; i < 10; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*2), 150, 150);
  }
  for (let i = 1; i < 10; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*3), 150, 150);
  }
  for (let i = 1; i < 10; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*4), 150, 150);
  }
}