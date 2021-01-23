class bob {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':1.3,
        'friction':0.5,
        'density':0.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      World.add(world, this.body);
      }
    display(){
      push()
      fill(144,40,40)
      ellipseMode(CENTER)
      ellipse(this.body.position.x,this.body.position.y,80,80)
      pop()
    }
    };