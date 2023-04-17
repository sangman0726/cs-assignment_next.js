/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */

let location1;  // Location of shape
let velocity;  // Velocity of shape
let gravity;   // Gravity acts at the shape's acceleration

let place; //another location of added ball
let speed; //another velocity of added ball
let power; //another gravity of added ball

function setup() {
  createCanvas(640,360);
  location1 = createVector(100,70);
  velocity = createVector(1.5,2.1);
  gravity = createVector(0,0.2);
  
  place = createVector(80, 20);
  speed = createVector(2.0,3.0);
  power = createVector(0, 0.3);
}

function draw() {
  background(0);
  
  // Add velocity to the location.
  location1.add(velocity);
  // Add gravity to velocity
  velocity.add(gravity);
  
  // Add speed to the place.
  place.add(speed);
  // Add power to speed
  speed.add(power);
  
  // Bounce off edges
  if ((location1.x > width) || (location1.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  
  if (location1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity.y = velocity.y * -0.95; 
    location1.y = height;
  }
  
  //Bounce off edges for my ball
  if ((place.x > width) || (place.x < 0)) {
    speed.x = speed.x * -1;
  }
  
  if (place.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    speed.y = speed.y * -0.9; 
    place.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,48,48);
  
  stroke(250,120);
  strokeWeight(8);
  fill(120,7,10);
  ellipse(place.x,place.y,60,60);
}