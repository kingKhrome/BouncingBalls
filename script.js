/* global createCanvas, loadImage, background, image, dvdImage */

// The amazing variable x and y, which tell us where we are.
let x = 1;
let y = 1;
// Canvas size
let width = 800;
let height = 600;
// Logo size
let logo_width = 200;
let logo_height = 150;
let velocity = 5;
let xdirection = 1;
let ydirection = 1;

function setup(){
  createCanvas(width, height)
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387")
}

function draw(){
  // shorthand for x_new = x_prev + 1
  // try different values of incrementation... what happens if x is very large?  what if the increment is negative?
  // We want the x to stop growing when...  for example (x > 800)
  if (x > (width - logo_width)) {
    xdirection = -1;
  } else if (x < 0) {
    xdirection = 1;
  }
  if (y > (height - logo_height)) {
    ydirection = -1;
  } else if (y < 0) {
    ydirection = 1;
  }
  x += (velocity * xdirection);
  y += (velocity * ydirection);
  background(220)
  // Draw the logo at the new position.
  image(dvdImage, x, y, logo_width, logo_height)
}