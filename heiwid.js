let ellHeight = 50; 
let ellWidth = 70; 

function setup() {
    createCanvas(300, 300);
    noLoop();
}

function draw() {
    background(254);
    fill(254);
    stroke(40);
    strokeWeight(8);
    ellipse(100, 200, 250, 250);
    ellipse(300, 200, 250, 250);
    ellipse(200, 300, 250, 250);
    ellipse(300, 300, 250, 250); 
}