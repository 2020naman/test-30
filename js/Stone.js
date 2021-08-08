class Stone {
    constructor(x,y,r){
        let options={
            isStatic:false
        };
        this.body=Bodies.circle(x,y,r,options)
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body)
    }
    show() {
        let pos = this.body.position;
        
        push();
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, 80);
        pop();
      }
   }