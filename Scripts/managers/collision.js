var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.boxCheck = function (coll, objColliding) {
            // Check distance between LASER and enemy
            if (coll.tr_corner.x > objColliding.tl_corner.x &&
                coll.tl_corner.x < objColliding.tr_corner.x &&
                coll.tr_corner.y < objColliding.bl_corner.y &&
                coll.br_corner.y > objColliding.tl_corner.y) {
                return true; //this.destroy(objColliding);
            }
        };
        Collision.prototype.boxCircleCheck = function (coll, objColliding) {
            var circleDistancex = Math.abs(objColliding.center.x - coll.tl_corner.x);
            var circleDistancey = Math.abs(objColliding.center.y - coll.tl_corner.y);
            if (circleDistancex > (coll.width / 2 + objColliding.radius)) {
                return false;
            }
            if (circleDistancey > (coll.height / 2 + objColliding.radius)) {
                return false;
            }
            if (circleDistancex <= (coll.width / 2)) {
                return true;
            }
            if (circleDistancey <= (coll.height / 2)) {
                return true;
            }
            var cornerDistance = ((circleDistancex - coll.width / 2) * (circleDistancex - coll.width / 2)) + ((circleDistancey - coll.height / 2) * (circleDistancey - coll.height / 2));
            return (cornerDistance <= (objColliding.radius * objColliding.radius));
        };
        Collision.prototype.circleCircleCheck = function (coll, objColliding) {
            var dx = coll.center.x - objColliding.center.x;
            var dy = coll.center.y - objColliding.center.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < coll.radius + objColliding.radius)
                return true;
        };
        Collision.prototype.destroy = function (objToDestroy) {
            // objToDestroy.destroy();
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map