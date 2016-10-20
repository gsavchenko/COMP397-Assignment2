var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Moon = (function (_super) {
        __extends(Moon, _super);
        // Create moon from gameAtlas which stores animation frames
        function Moon(imageString, posX, posY) {
            _super.call(this, gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
        }
        return Moon;
    }(objects.GameObject));
    objects.Moon = Moon;
})(objects || (objects = {}));
//# sourceMappingURL=moon.js.map