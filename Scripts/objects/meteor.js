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
        function Meteor(imageString, posX, posY) {
            _super.call(this, gameAtlas, imageString, "");
            this._speed = 3;
            this.id++;
            this.x = posX;
            this.y = posY;
            console.log("Meteor: " + this.id + " made");
            console.log("x: " + this.x + " y " + this.y);
        }
        Meteor.prototype.update = function () {
            console.log("update");
            this.y = this.y + this._speed;
        };
        // Private variables
        Meteor.id = 0;
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map