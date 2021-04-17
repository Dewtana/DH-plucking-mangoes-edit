class stone{
    constructor(x,y,r){
        var option={
isStatic:true,
density:1.2,
restitution:0,
friction:1,
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("stone.png")
        this.body=Bodies.circle(this.x,this.y,this.r,option)
        World.add(world,this.body)
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        fill (255,0,255)
        imageMode (CENTER)
        image (this.image,0,0,this.r*2,this.r*2)
        pop ()
    }
}