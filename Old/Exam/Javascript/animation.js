// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(800, 800); 
} 

noStroke();

// position of the car
var x = 10;
    
draw = function() {
    // all lines of code inside here will be run repeatedly
    background(151, 244, 247);
    
    // draw the car body
    fill(255, 0, 115);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(100, 100, 100); // => y so 1
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);
    
    x = x + 2;
};
drawCar = function(size,color,speed) //=>>>>>>>> y so 4
{
      // all lines of code inside here will be run repeatedly
      background(151, 244, 247);
    
      // draw the car body
      fill(255, 0, 115);
      rect(y, 200, 100, 20);
      rect(y + 15, 178, 70, 40);
      
      // draw the wheels
      fill(100, 100, 100); // => y so 1
      ellipse(y + 25, 221, 24, 24);
      ellipse(y + 75, 221, 24, 24);
      
      y = y + 3;

      // all lines of code inside here will be run repeatedly
      background(151, 244, 247);
    
      // draw the car body
      fill(255, 0, 115);
      rect(z, 200, 100, 20);
      rect(z + 15, 178, 70, 40);
      
      // draw the wheels
      fill(100, 100, 100); // => y so 1
      ellipse(z + 25, 221, 24, 24);
      ellipse(z + 75, 221, 24, 24);
      
      z = z + 4;
}
