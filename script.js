/* global createCanvas, loadImage, background, image, dvdImage */

// The amazing variable x.
let x = 1;
let width = 800;
let height = 600;
let velocity = 3;
let direction = 1;

function setup(){
  createCanvas(width, height)
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387")
}

function draw(){
  // shorthand for x_new = x_prev + 1
  // try different values of incrementation... what happens if x is very large?  what if the increment is negative?
  // We want the x to stop growing when...  for example (x > 800)
  if (x > width) {
    velocity = 0;
  } else {
    velocity = 1;
  }
  x += (velocity;
  background(220)
  // Draw the logo at the new position.
  image(dvdImage, x, 50, 200, 150)
}