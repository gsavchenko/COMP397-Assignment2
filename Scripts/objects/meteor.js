var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Meteor = (function (_super) {
        __extends(Meteor, _super);
        // Create moon from gameAtlas which stores animation frames
        function Meteor(imageString, posX, posY, speed) {
            _super.call(this, gameAtlas, imageString, "");
            this._speed = 4;
            this.id++;
            this.name = "meteor";
            this.x = posX;
            this.y = posY;
            this._speed = speed;
            this.isDead = false;
            console.log("Meteor: " + this.id + " made");
            console.log("x: " + this.x + " y " + this.y + " speed: " + this._speed);
        }
        Meteor.prototype.update = function () {
            console.log("update");
            this.y = this.y + this._speed;
            if (this.y > 580)
                this.isDead = true;
        };
        // Private variables
        Meteor.id = 0;
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map