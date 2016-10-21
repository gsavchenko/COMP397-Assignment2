var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion(imageString, posX, posY) {
            _super.call(this, gameAtlas, imageString, "");
            this._deathTimer = 0;
            this.x = posX;
            this.y = posY;
        }
        Explosion.prototype.update = function () {
            this._deathTimer += createjs.Ticker.interval;
            console.log(this._deathTimer);
            if (this.currentAnimationFrame == gameAtlas.getNumFrames("explode") - 1) {
                currentScene.removeChild(this);
            }
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map