let shape, context, cx, cy, d = 15;

function setup()
{
  context= createCanvas(windowWidth, windowHeight);
  //context.parent('p5-canvas');
  context.mouseOver(circleResize);
}

function draw() 
{
  background(255,2,255);
  strokeWeight(2);
  d = map(abs(sin(frameCount*0.016)), 0, 1, -85, 85);
  //circle(random(100, 300), random(100, 300), abs(sin(frameCount*0.05)*100));
  circle(300, 300, 200);
  for(let i = 0; i<100; i++)
  {
    circle(100*sin(TWO_PI/50*i)+300, 100*cos(TWO_PI/50*i)+300, 10);
    //line(300, 300, (100*sin(TWO_PI/10*i)+300), (100*cos(TWO_PI/10*i)+300));

    cx = 300 + (d)*sin(TWO_PI/50*i);
    cy = 300 + (d)*cos(TWO_PI/50*i);

    circle(cx, cy, 30);
  }
}

/*
  general diameters end = {(100*sin(TWO_PI/10*i)+300), (100*cos(TWO_PI/10*i)+300)}


  General equation of the line
  
  (300, 300) and {(100*sin(TWO_PI/10*i)+300), (100*cos(TWO_PI/10*i)+300)}
  
  (y-300) = (x-300)*(cot(TWO_PI/10*i))
*/

function windowResized()
{
  resizeCanvas(displayWidth, displayHeight);
}

function circleResize()
{
  context.pause();
}
