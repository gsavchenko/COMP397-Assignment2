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
        function Meteor_Factory() {
            _super.call(this, gameAtlas, "", "");
        }
        Meteor_Factory.prototype.start = function () {
            // initialize variables here
            this._amountOnScreen = 4;
            this._meteorList = new Array();
            //this._meteorList.length = 3;
            this.x = 50;
            this.y = -300;
            this.height = 500;
            this.width = 500;
            this.timer = 0;
            this._createMeteor(this._amountOnScreen);
        };
        // this could be better (contines updating after scene switch and doesn't need to check death every frame)
        Meteor_Factory.prototype.update = function () {
            this.timer += createjs.Ticker.interval;
            //console.log(this.timer);
            for (var x = 0; x < this._meteorList.length; x++) {
                this._meteorList[x].update();
                if (this._meteorList[x].isDead) {
                    currentScene.removeChild(this._meteorList[x]);
                    this._meteorList.splice(x, 1);
                    this._createMeteor(1);
                }
            }
        };
        Meteor_Factory.prototype._createMeteor = function (amount) {
            for (var x = 0; x < amount; x++) {
                var posX = this._getRandNum(this.x, (this.x + this.width));
                var posY = this._getRandNum(this.y, (this.y + this.height));
                var speed = this._getRandNum(3, 6);
                this._meteorList.push(new objects.Meteor("meteor", posX, posY, speed));
            }
        };
        Meteor_Factory.prototype._getRandNum = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        return Meteor_Factory;
    }(objects.GameObject));
    objects.Meteor_Factory = Meteor_Factory;
})(objects || (objects = {}));
//# sourceMappingURL=meteor_factory.js.map