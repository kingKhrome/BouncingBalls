framerate = 60
function setup() {
  createCanvas(1000, 400);
  frameRate(framerate)

}
// 1 meter = 10 units




colors = ['red','green','blue','yellow','black','pink']
positions = []


function spawn(n) {
  while (n != 0) {
    
  }
}


class Ball {
  function constructor (x_cor,y_cor,x_vel,y_vel=0) {
    this.x_cor = x_cor
    this.y_cor = y_cor
    this.x_vel = x_vel
    this.y_vel = y_vel
    this.x_acc = 0
    this.y_acc = 98
    this.color = colors[Math.floor(Math.random() * colors.length)]
    //positions.push([this.x_cor,this.y_cor])
    circle(this.x_cor,this.y_cor,20)
  }
  
  function collisionCheck(){
    for(let i=0; i<positions.length; i++) {
      dist = ((positions[0] ** 2)- (this.x_cor**2) + (positions[1] ** 2)- (this.y_cor**2))
      if (dist !==0 && dist < 10) this.x_vel = -this.x_vel  
    }
    
  }
  function simulate() {
    circle(this.x_cor,this.y_cor,20)
    this.x_cor = this.x_cor + this.x_vel/framerate
    this.y_cor = this.y_cor + this.y_vel/framerate
    this.x_vel = this.x_vel + this.x_acc/framerate
    this.y_vel = this.y_vel + this.y_acc/framerate
    positions.push([this.x_cor,this.y_cor])
    
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

ball = new Ball(100,200,100)
function draw() {
  background(220);
  ball.simulate()
  circle(this.x_cor,this.y_cor,20)
}