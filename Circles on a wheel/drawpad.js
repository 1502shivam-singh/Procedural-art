let shape, context, d=1, stop = 1;

function setup()
{
  context= createCanvas(windowWidth, windowHeight);
  //context.parent('p5-canvas');
  context.mouseOver(circleResize);
}

// function draw() 
// {
//   background(255,2,255);
//   strokeWeight(2);
//   shape = circle(random(100, 300), random(100, 300), abs(sin(frameCount*0.05)*100));
// }

function draw() 
{
  background(255,2,255);
  strokeWeight(2);
  // shape = circle(random(100, 300), random(100, 300), abs(sin(frameCount*0.05)*100));
  circle(300, 300, 200);
  for(let i = 0; i<10; i++)
  {
    line(300, 300, (100*sin(TWO_PI/10*i)+300), (100*cos(TWO_PI/10*i)+300));
  }
  // for(let i = 0; i<=10; i++)
  // {
  //   line(300, 300, (100*sin(TWO_PI/10*i)+300), (100*cos(TWO_PI/10*i)+300));
  // }
}

function windowResized()
{
  resizeCanvas(displayWidth, displayHeight);
}

function circleResize()
{
  context.pause();
}