class tree{
    constructor(x,y){
        this.x=x
        this.y=y
        this.treeWidth=450
        this.treeHeight=600
        this.treeThickness=10
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y+10)
        fill (255)
        imageMode (CENTER)
        image (this.image,0,-this.treeHeight/2,this.treeWidth,this.treeHeight)
    }
}