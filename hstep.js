let ypos = 100; 
let xpos = 75; 
let xstep = 50; 
let hstep = 25; 
let fillstep = 50; 

function setup() {
  createCanvas(300, 300);
  noLoop();
}

function draw() {
  background(254);
  fill(254);
  noStroke();

  for (let i = 1; i < 20; i++) {
    fill(254, 254-(fillstep*i), 150);
    ellipse(xpos+(xstep*i), ypos, 20, 20+(hstep*i));
  }
}