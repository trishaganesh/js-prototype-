let diameter = 300; 

function setup() {
    createCanvas(300, 300);
    noLoop();
}

function draw() {
    background(254);
    fill(254);
    stroke(40);
    strokeWeight(8);
    ellipse(100, 200 + 50, 250, 250);
    ellipse(300, 200 + 50, 250, 250);
    ellipse(200, 300 + 50, 250, 250);
    ellipse(300, 300 + 50, 250, 250); 
}