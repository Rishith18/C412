class Man{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,75,options);
        World.add(world, this.body);
        this.image = loadImage("images/walking_frames/walking_1.png");
      }
      display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,150,200);
        pop();
      }
}
