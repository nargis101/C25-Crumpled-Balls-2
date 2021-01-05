class Paper{
    constructor(){
        var options = {
             isStatic: false,
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2
        }

        this.body = Bodies.circle(155, 300, 10, options);
        this.width = 33;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("white");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40, 40);
    }
};