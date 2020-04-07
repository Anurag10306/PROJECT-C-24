// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground,tanker1,tanker2,tanker3,tank;
/*

const {Engine} = Matter
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
world = engine.world;
  ground = new Ground(200,400,400,20);
  tanker1 = new Tanker(0,380,100,20);
  tanker2 = new Tanker(0,360,100,20);
  tanker3 = new Tanker(0,335,50,30);
  tank = new Tank(-50,370,0,PI/3);

    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
  background(169,169,169);
  ground.display();
  tanker1.display();
  tanker2.display();
  tanker3.display();
  tank.display();

// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}
