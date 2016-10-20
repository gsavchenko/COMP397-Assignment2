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
        function Meteor(imageString) {
            _super.call(this, gameAtlas, imageString, "");
            // Private variables
            this._speed = 3;
            this.x = this._getRandNum(50, 600);
            this.y = 100;
        }
        Meteor.prototype._getRandNum = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        Meteor.prototype.update = function () {
            console.log("update");
            this.y = this.y + this._speed;
        };
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map