/*
    Manager module to group all user-defined managers under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Collision
    Description:    Collision scene that implements the collision checks between sprites
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added check between boxes/cicles and circles/circles

*/
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
        // Check the collision between 2 box objects (add box object)
        Collision.prototype.boxCheck = function (boxObjectOne, boxObjectTwo) {
            if (boxObjectOne.topRightCorner.x > boxObjectTwo.topLeftCorner.x &&
                boxObjectOne.topLeftCorner.x < boxObjectTwo.topRightCorner.x &&
                boxObjectOne.topRightCorner.y < boxObjectTwo.bottomLeftCorner.y &&
                boxObjectOne.bottomRightCorner.y > boxObjectTwo.topLeftCorner.y) {
                return true;
            }
        };
        // Check the collision between a box object and circle object (added box/circle GameObjects)
        Collision.prototype.boxCircleCheck = function (boxObject, circleObject) {
            // Store magnitude of positions in x and y
            var distanceX = Math.abs(circleObject.center.x - boxObject.topLeftCorner.x);
            var distanceY = Math.abs(circleObject.center.y - boxObject.topLeftCorner.y);
            var cornerDistance;
            // Check distance to radius
            if (distanceX > (boxObject.width / 2 + circleObject.radius))
                return false;
            if (distanceY > (boxObject.height / 2 + circleObject.radius))
                return false;
            if (distanceX <= (boxObject.width / 2))
                return true;
            if (distanceY <= (boxObject.height / 2))
                return true;
            // Store magnitude of corner from radius (when corner and circle intersect)
            cornerDistance = ((distanceX - boxObject.width / 2) * (distanceX - boxObject.width / 2)) + ((distanceY - boxObject.height / 2) * (distanceY - boxObject.height / 2));
            // Check distance of corner from radius
            return (cornerDistance <= (circleObject.radius * circleObject.radius));
        };
        // Check the collision between two circle objects (add circle objects!!)
        Collision.prototype.circleCircleCheck = function (circleObjectOne, circleObjectTwo) {
            // Store magnitude of positions in x and y
            var distanceX = circleObjectOne.center.x - circleObjectTwo.center.x;
            var distanceY = circleObjectOne.center.y - circleObjectTwo.center.y;
            // Store distance between circles
            var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            // If distance between circles is greater than their combined radius then they are colliding
            if (distance < circleObjectOne.radius + circleObjectTwo.radius)
                return true;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map