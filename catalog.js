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
    ellipse(300 - 15, 200, 250, 250);
    ellipse(200, 300 + 40, 250 / 4, 250);
    ellipse(300, 300, 250 * 3, 250); 
}