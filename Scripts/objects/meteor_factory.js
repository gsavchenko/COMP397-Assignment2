var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Meteor_Factory = (function (_super) {
        __extends(Meteor_Factory, _super);
        // Create moon from gameAtlas which stores animation frames
        function Meteor_Factory(posX, posY, height, width) {
            _super.call(this, gameAtlas, "", "");
            this._spawnRate = 1; // meteors/sec
            this._amountOnScreen = 1;
            this.x = posX;
            this.y = posY;
            this.height = height;
            this.width = width;
        }
        Meteor_Factory.prototype.start = function () {
        };
        Meteor_Factory.prototype.update = function () {
        };
        return Meteor_Factory;
    }(objects.GameObject));
    objects.Meteor_Factory = Meteor_Factory;
})(objects || (objects = {}));
//# sourceMappingURL=meteor_factory.js.map