var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Moon
    Description:    Moon class extends GameObject and creates Moon
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added Comments
*/
var objects;
(function (objects) {
    var Moon = (function (_super) {
        __extends(Moon, _super);
        // Create moon from gameAtlas which stores animation frames
        function Moon(imageString, posX, posY) {
            _super.call(this, gameAtlas, imageString, "");
            this.center = new objects.Vector2(320, 5);
            this.x = posX;
            this.y = posY;
            // Collision information
            this.center = new objects.Vector2(320, 805);
            this.radius = 400;
        }
        return Moon;
    }(objects.GameObject));
    objects.Moon = Moon;
})(objects || (objects = {}));
//# sourceMappingURL=moon.js.map