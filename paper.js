
    class paper {
        constructor(x, y) {
          var options = {
              isStatic : false,
            density:0.3,
            friction: 0,
            restitution:1.2
          };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 140;
          this.height = 40;
          World.add(world, this.body);
        };
        display(){
          this.image = loadImage("paper.png");
          
          
        
      
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          
          rectMode(CENTER)
          rect(0, 0, this.width, this.height);
          pop();
        };
      };
         
