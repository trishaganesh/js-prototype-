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

   for (let j = 1; j < 10; j++) {
    for (let i = 1; i < 20; i++) {
      ellipse(xpos+(xstep*i), ypos+(ystep*j), 150, 150);
    }
  }
}