var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Tooth = (function (_super) {
        __extends(Tooth, _super);
        function Tooth(positionX, positionY) {
            _super.call(this, "tooth", "");
            this.name = "tooth";
            this.position = new objects.Vector2(positionX, positionY);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        Tooth.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Tooth;
    }(objects.GameObject));
    objects.Tooth = Tooth;
})(objects || (objects = {}));
//# sourceMappingURL=tooth.js.map