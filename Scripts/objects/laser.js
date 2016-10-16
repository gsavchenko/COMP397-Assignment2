var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Laser = (function (_super) {
        __extends(Laser, _super);
        function Laser() {
            _super.call(this, "laser");
            this._speed = 15;
        }
        Laser.prototype.start = function () {
        };
        Laser.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x += this._speed;
        };
        Laser.prototype.setPosition = function (newPosition) {
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        };
        return Laser;
    }(objects.GameObject));
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map