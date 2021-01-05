    class Ground{
      constructor(){
        var options = {
          isStatic: true
        }

        this.body = Bodies.rectangle(400, 380, 800, 10, options);
        this.width = 800;
        this.height = 10;
        World.add(world, this.body);
      }

      display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
    }