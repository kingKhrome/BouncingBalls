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

positions = []

class Ball {
  function constructor (x_cor,y_cor,x_vel,y_vel,x_acc) {
    this.x_cor = x_cor
    this.y_cor = y_cor
    this.x_vel = x_vel
    this.y_vel = y_vel
    this.x_acc = x_acc 
    this.color = colors[Math.floor(Math.random() * colors.length)] }
  
  function collisionCheck(){
    for(let i=0; i<positions.length; i++) {
      dist = ((positions[0] ** 2)- (this.x_cor**2) + (positions[1] ** 2)- (this.y_cor**2))
      if dist == 0
      
    }
    
  }
  function simulate() {
    circle(this.x_cor,this.y_cor,20)
    this.x_cor = this.x_cor + this.x_vel/framerate
    this.y_cor = this.y_cor + this.y_vel/framerate
    this.x_vel = this.x_vel + this.x_acc/framerate
    this.y_vel = this.y_vel + this.y_acc/framerate
    
    if (this.y_cor >= 400 || this.y_cor <= 0) {
    this.y_vel = -this.y_vel
    color = colors[Math.floor(Math.random() * colors.length)]
    fill(color) 
    return -1}
    
    if (this.x_cor >= 400 || this.x_cor <= 0) {
    this.x_vel = -this.x_vel 
    return -1}
    this.collisionCheck()
    
  }
    
  }
    
