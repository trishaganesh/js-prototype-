let ellWidth = 150; 
let ellHeight = ellWidth * 3; 

function setup() {
    createCanvas(300, 300);
    noLoop();
}

function draw() {
    background(254);
    fill(254);
    stroke(40);
    strokeWeight(8);
    ellipse(100, 200, ellWidth, ellHeight);
    ellipse(300, 200, ellWidth, ellHeight);
    ellipse(200, 300, ellWidth, ellHeight);
    ellipse(300, 300, ellWidth, ellHeight); 
}