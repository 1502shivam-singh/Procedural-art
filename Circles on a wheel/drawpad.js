let context, cx, cy, d = 15, dia = 400, centerX = 800, centerY = 300, sectors = 10;

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
  d = map(abs(sin(frameCount*0.01)), 0, 1, 5, (dia/2)-15);
  //circle(random(100, 300), random(100, 300), abs(sin(frameCount*0.05)*100));
  circle(centerX, centerY, dia);
  for(let i = 0; i<sectors; i++)
  {
    //circle((dia/2)*sin(TWO_PI/sectors*i)+centerX, (dia/2)*cos(TWO_PI/sectors*i)+centerY, 10);
    line(centerX, centerY, ((dia/2)*sin(TWO_PI/sectors*i)+centerX), ((dia/2)*cos(TWO_PI/sectors*i)+centerY));
   
    circle((dia/2)*sin(TWO_PI/sectors*i)+centerX, (dia/2)*cos(TWO_PI/sectors*i)+centerY, 10);
   
    cx = centerX + (d)*sin(TWO_PI/sectors*i);
    cy = centerY + (d)*cos(TWO_PI/sectors*i);

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


