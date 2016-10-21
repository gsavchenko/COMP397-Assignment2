module managers {
    export class Collision {
        constructor() {
            this.start();
        }

        public start() {

        }

        public update() {

        }

        public boxCheck(coll:objects.GameObject, objColliding:objects.GameObject) {
            // Check distance between LASER and enemy
            
            if(coll.tr_corner.x > objColliding.tl_corner.x &&
                coll.tl_corner.x < objColliding.tr_corner.x &&
                coll.tr_corner.y < objColliding.bl_corner.y &&
                coll.br_corner.y > objColliding.tl_corner.y) {
                    return true;//this.destroy(objColliding);
            }
        }

        public boxCircleCheck(coll:objects.GameObject, objColliding:objects.Moon){
            var circleDistancex = Math.abs(objColliding.center.x - coll.tl_corner.x);
            var circleDistancey = Math.abs(objColliding.center.y - coll.tl_corner.y);

            if (circleDistancex > (coll.width/2 + objColliding.radius)){return false;}
            if (circleDistancey > (coll.height/2 + objColliding.radius)){return false;}

            if (circleDistancex <= (coll.width/2)){return true;}
            if (circleDistancey <= (coll.height/2)){return true;}

            var cornerDistance = ((circleDistancex - coll.width/2)*(circleDistancex - coll.width/2)) + ((circleDistancey - coll.height/2)*(circleDistancey - coll.height/2));

            return(cornerDistance <= (objColliding.radius*objColliding.radius)); 
        }

        private destroy(objToDestroy : objects.GameObject) : void {
           // objToDestroy.destroy();
        }
    }
}