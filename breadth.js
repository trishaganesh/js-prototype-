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
    ellipse(100, 200, diameter, diameter);
    ellipse(300, 200, diameter+50, diameter+50);
    ellipse(200, 300, diameter+75, diameter+50);
    ellipse(300, 300, diameter+100, diameter+50); 
}