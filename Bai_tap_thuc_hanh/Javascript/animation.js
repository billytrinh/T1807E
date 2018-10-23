// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(800, 800); 
} 

noStroke();

// position of the car
var x = 10;
    
draw = function() {
    // all lines of code inside here will be run repeatedly
    background(255,255,0);
    
    // draw the car body
    fill(128,0,128);//change color of car
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(128,0,128); 
    ellipse(x + 25, 221, 40, 40); //change size of wheel
    ellipse(x + 75, 221, 40, 40);//change size of wheel
    
    x = x + 1;
};