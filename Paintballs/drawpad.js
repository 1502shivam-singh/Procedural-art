
let pg, posX;

function setup() {
  createCanvas(displayWidth, displayHeight);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(random(0,255), random(0,255), random(0,255));
  noStroke();
  for(let i=0; i< 10; i++){ 
    posX = random(1,90); 
    ellipse(random(0,displayWidth), random(0,displayHeight), posX, posX);
  }
  posX = random(1,60); 
  ellipse(mouseX, mouseY, posX, posX);
}

function windowResized(){
    resizeCanvas(displayWidth, displayHeight);
}