class Stone {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0,
            friction: 1,
            density : 1.2
        }

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
    }
}