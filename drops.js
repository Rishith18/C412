class Drops {
    constructor(x,y) {
        var options = {
            'restitiution' : 0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,2.5);
        this.diameter = 5
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        circle(pos.x,pos.y,this.diameter);
        
        pop();
      }

    updatePosition() {
        if (this.body.position.y > 700) {
            Matter.Body.setPosition(this.body,{
                x:random(0,300),
                y:random(0,400)
            })
        }
    }
}