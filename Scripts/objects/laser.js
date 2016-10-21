var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion() {
            _super.call(this, "laser", "");
            this._speed = 15;
        }
        Explosion.prototype.start = function () {
        };
        Explosion.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x += this._speed;
        };
        Explosion.prototype.setPosition = function (newPosition) {
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map