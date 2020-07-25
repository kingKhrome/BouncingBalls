let colors = ['red','green','blue','yellow','black','pink','gold']
let positions = {} //used in collisionCheck
let framerate = 60
let airResistance =.002
let friction = .07

function setup() {
  createCanvas(1000, 400);
  strokeWeight(0)
  frameRate(framerate)
  
}

class Ball {
    constructor(name) {
    this.name = name.toString(10)
    this.x_cor = Math.floor(Math.random() * 951);
    this.y_cor = 400 - Math.floor(Math.random() * 251);
    this.x_vel = Math.floor(Math.random() * 201);
    this.y_vel = Math.floor(Math.random() * 101);
    this.x_acc = 0
    this.y_acc = 200
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.total_velocity = (this.x_vel**2 + this.y_vel**2)**.5
    positions[this.name] = [this.x_cor,this.y_cor]
  }
  
    collisionCheck(){ //checks for collisions between balls --will fix later
      let vals = Object.values(positions)
      for(let i=0; i<vals.length; i++) {
       let dist = ((vals[i][0]- this.x_cor)**2 + (vals[i][1] - this.y_cor)**2)**.5 
       if (dist !==0 && dist < 20) {
         this.x_vel = -this.x_vel
         this.y_vel = this.y_vel - (this.y_vel/this.total_velocity)*friction }
    }
  } 
   decay() {
     return -1
     this.x_vel = this.x_vel - (this.x_vel/this.total_velocity)*airResistance
     this.y_vel = this.y_vel - (this.y_vel/this.total_velocity)*airResistance
     
   }
  
    simulate() {
    this.x_cor = this.x_cor + this.x_vel/framerate
    this.y_cor = this.y_cor + this.y_vel/framerate
    this.x_vel = this.x_vel + this.x_acc/framerate
    this.y_vel = this.y_vel + this.y_acc/framerate
    positions[this.name] = [this.x_cor,this.y_cor]
    
    if (this.y_cor >= 400 || this.y_cor <= 0) {
    this.y_vel = -this.y_vel
    //this.y_vel = this.y_vel - (this.y_vel/this.total_velocity)*friction
    //this.color = colors[Math.floor(Math.random() * colors.length)]
    }
    
    if (this.x_cor >= 1000 || this.x_cor <= 0) {
    this.x_vel = -this.x_vel
    //this.y_vel = this.y_vel - (this.y_vel/this.total_velocity)*friction
    }
    this.decay()
    this.collisionCheck()
    
  }
    
  }

//n = parseInt(prompt('How many balls?'))
let balls = []
function makeBalls(n) {
  for(let i=0; i<n;i++) {
    balls.push(new Ball(i))
  }
    
}
let n = 10
makeBalls(n)


function draw() {
  background(220)  
  function display(ball) {
    fill(ball.color)
    circle(ball.x_cor,ball.y_cor,10)
    ball.simulate()
  }
  balls.forEach(display)
  
  
  

}