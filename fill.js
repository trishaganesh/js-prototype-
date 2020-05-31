let fillG = 150; 
let fillstep = 50; 
let xpos = 75; 
let ypos = 100; 
let xstep = 50; 
let ystep = xstep / 3; 

function setup() {
    createCanvas(300, 300);
    noLoop();
}

function draw() {
    background(254);
    noStroke (); 

    fill(254, fillG, 254);
    rect(xpos, ypos, 150, 150)

    fill(254, fillG+fillstep, 254);
    rect(xpos+xstep, ypos + ystep, 150, 150);

    fill(254, fillG+(fillstep * 2), 254);
    rect(xpos+(xstep*2), ypos+(ystep*2), 150, 150);

    fill(254, fillG+(fillstep*3), 254);
    rect(xpos+(xstep*3), ypos+(ystep*3), 150, 150);

    fill(254, fillG+(fillstep*4), 254);
    rect(xpos+(xstep*4), ypos+(ystep*4), 150, 150);
}