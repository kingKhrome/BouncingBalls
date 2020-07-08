let colors = ['red','green','blue','yellow','black','pink','gold']
let positions = {} //used in collisionCheck
let framerate = 60

function setup() {
  createCanvas(1000, 400);
  frameRate(framerate)
  
}

class Ball {
    constructor(name) {
    this.name = name
    this.x_cor = Math.floor(Math.random() * 1001);
    this.y_cor = Math.floor(Math.random() * 401);
    this.x_vel = Math.floor(Math.random() * 51);
    this.y_vel = Math.floor(Math.random() * 51);
    this.x_acc = Math.floor(Math.random() * 101);
    this.y_acc = 98
    this.color = colors[Math.floor(Math.random() * colors.length)]
    positions[this.name] = [this.x_cor,this.y_cor]
  }
  
    collisionCheck(){ //checks for collisions between balls --will add later
      let vals = Object.values(positions)
      for(let i=0; i<vals.length; i++) {
       let dist = ((vals[i][0] ** 2)- (this.x_cor**2) + (vals[i][1] ** 2)- (this.y_cor**2))
       //if (dist !==0 && dist < 2) this.x_vel = -this.x_vel  
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


let ball1 = new Ball(33,33,`ball1`,176)
let ball2 = new Ball(333,333,`ball2`,-255)
let ball3 = new Ball(621,345,`ball3`,187)
let ball4 = new Ball(444,200,`ball4`,-172)
let ball5 = new Ball(123,200,`ball5`,300)
let ball6 = new Ball(523,200,`ball6`,-133)
let ball7 = new Ball(245,200,`ball7`,195)
let ball8 = new Ball(735,200,`ball8`,-67)
let ball9 = new Ball(888,200,`ball9`,78)
let ball10 = new Ball(960,200,`ball10`,-245)

function draw() {
  background(220)  
  function display(ball) {
    fill(ball.color)
    circle(ball.x_cor,ball.y_cor,10)
    ball.simulate()
  }
  display(ball1)
  //display(ball2)
  display(ball3)
  display(ball4)
  //display(ball5)
  display(ball6)
  display(ball7)
  //display(ball8)
  //display(ball9)
  //display(ball10)
  

}