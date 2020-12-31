class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB =  pointB;
        this.Sling_shot = Constraint.create(options);
        World.add(world, this.Sling_shot);
    }
    
    Fly() {
        this.Sling_shot.bodyA = null;
    }

    display(){
        if(this.Sling_shot.bodyA) {
            var pointA = this.Sling_shot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        } 
    }
}