function setup() {
  createCanvas(1000, 400);
  frameRate(60)

}
// 1 meter = 10 units
let ball

let x_acc = 0
const y_acc = 98

let x_cor = 500
let y_cor = 200

let x_vel = 50
let y_vel = 0
colors = ['red','green','blue','yellow','black','pink']
let color = 'red'

function draw() {
  background(220);
  ball = circle(x_cor,y_cor,20)
  x_cor += x_vel/60
  x_vel += x_acc/60
  if (x_cor <= 0 || x_cor >= 1000) {
    x_vel = -x_vel}
  y_cor += y_vel/60
  y_vel += y_acc/60
  if (y_cor >= 400 || y_cor <= 0) {
    y_vel = -y_vel
    color = colors[Math.floor(Math.random() * colors.length)];
    fill(color)
  }
  
}



class Ball {
  function constructor (x_cor,y_cor,x_vel,y_vel,x_acc) {
    this.x_cor = x_cor
    this.y_cor = y_cor
    this.x_vel = x_vel
    this.y_vel = y_vel
    this.x_acc = x_acc }
  
  function calculate() {
    
  }
    
