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
    fill(0, 100, 0); /* thay doi mau xe xanh la cay */
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 221, 50, 50); /* thay doi kich co chuyen size banh xe tu 24 len 50*/
    ellipse(x + 75, 221, 50, 50);
    
    x = x + 1;
};