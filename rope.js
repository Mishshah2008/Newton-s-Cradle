class rope1{
    constructor(body1,body2,offsetX, offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options={
            bodyA:body,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope=Constraint.create(options)
        World.add(world,this.rope)
        }

        display(){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;


            strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1X=pointA.y
        

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.x+this.offsetY


        line(Anchor1X,Anchor1Y,Anchor2X, Anchor2Y);      
            

        }


}