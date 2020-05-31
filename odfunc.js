let origx = 100;
let origy = 200;
let destx = 300;
let desty = 400;
function setup() {
  createCanvas(300, 300);
  noLoop();
}
function draw() {
    background(254);
    fill(254);
    strokeWeight(8);
    for (var i = 10; i < 1000; i += 100) {
      stroke(40);
      line(i, 150, origx, origy);
      stroke(250);
      line(i, 150, destx, desty);
    }
}