var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Meteor
    Description:    Meteor class extends GameObject and creates/updates meteor objects.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added Comments
*/
var objects;
(function (objects) {
    var Meteor = (function (_super) {
        __extends(Meteor, _super);
        // Create meteor from gameAtlas which stores animation frames and store relevant information
        function Meteor(imageString, posX, posY, speed) {
            _super.call(this, gameAtlas, imageString, "");
            // Public variables
            this.isDead = false; // should the meteor be destroyed?
            this.radius = 26; // fix magic number
            this._speed = 4;
            this._id++;
            this.x = posX;
            this.y = posY;
            this._speed = speed;
        }
        // Update the meteor's position and center (for collision detectioni)
        Meteor.prototype.update = function () {
            this.y = this.y + this._speed;
            this.center = new objects.Vector2(this.x, this.y);
            // If the meteor is off the screen destroy it
            if (this.y > 580)
                this.isDead = true;
        };
        // Private variables
        Meteor._id = 0;
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map