class Box{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0.4

        };
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.width= width;
        this.height=height;
        this.visibility=255;

    }
    score(){
        if(this.visibility<0 && this.visibility>-50){
            score++;
        }
    }

    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

        if(this.body.speed < 3){
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width, this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            pop();

        }
    }


}
