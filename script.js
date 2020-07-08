let colors = ['red','green','blue','yellow','black','pink','gold']
let positions = {} //used in collisionCheck
let framerate = 120

function setup() {
  createCanvas(1000, 400);
  frameRate(framerate)
  
}

class Ball {
    constructor(name) {
    this.name = name
    this.x_cor = Math.floor(Math.random() * 951);
    this.y_cor = 400 - Math.floor(Math.random() * 251);
    this.x_vel = Math.floor(Math.random() * 51);
    this.y_vel = Math.floor(Math.random() * 51);
    this.x_acc = 0
    this.y_acc = 10
    this.color = colors[Math.floor(Math.random() * colors.length)]
    positions[this.name] = [this.x_cor,this.y_cor]
  }
  
    collisionCheck(){ //checks for collisions between balls --will fix later
      let vals = Object.values(positions)
      for(let i=0; i<vals.length; i++) {
       let dist = ((vals[i][0]- this.x_cor)**2 + (vals[i][1] - this.y_cor)**2)**.5 
       if (dist !==0 && dist < 10) this.x_vel = -this.x_vel  
    }
  } 
  
    simulate() {
    this.x_cor = this.x_cor + this.x_vel/framerate
    this.y_cor = this.y_cor + this.y_vel/framerate
    this.x_vel = this.x_vel + this.x_acc/framerate
    this.y_vel = this.y_vel + this.y_acc/framerate
    positions[this.name] = [this.x_cor,this.y_cor]
    
    if (this.y_cor >= 400 || this.y_cor <= 0) {
    this.y_vel = -this.y_vel
    this.color = colors[Math.floor(Math.random() * colors.length)]
    }
    
    if (this.x_cor >= 1000 || this.x_cor <= 0) {
    this.x_vel = -this.x_vel 
    }
    this.collisionCheck()
    
  }
    
  }


let ball1 = new Ball(`ball1`)
let ball2 = new Ball(`ball2`)
let ball3 = new Ball(`ball3`)
let ball4 = new Ball(`ball4`)
let ball5 = new Ball(`ball5`)
let ball6 = new Ball(`ball6`)
let ball7 = new Ball(`ball7`)
let ball8 = new Ball(`ball8`)
let ball9 = new Ball(`ball9`)
let ball10 = new Ball(`ball10`)

function draw() {
  background(220)  
  function display(ball) {
    fill(ball.color)
    circle(ball.x_cor,ball.y_cor,10)
    ball.simulate()
  }
  display(ball1)
  display(ball2)
  display(ball3)
  display(ball4)
  display(ball5)
  display(ball6)
  display(ball7)
  display(ball8)
  display(ball9)
  display(ball10)
  

}