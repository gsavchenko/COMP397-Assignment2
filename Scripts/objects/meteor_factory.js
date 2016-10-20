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
            this._amountOnScreen = 3;
            this._meteorList = new Array();
            //this._meteorList.length = 3;
            this.x = 50;
            this.y = 100;
            this.height = 100;
            this.width = 500;
            this._createMeteor();
        };
        Meteor_Factory.prototype.update = function () {
            this._meteorList.forEach(function (meteor) {
                meteor.update();
            });
        };
        Meteor_Factory.prototype._createMeteor = function () {
            for (var x = 0; x < this._amountOnScreen; x++) {
                var posX = this._getRandNum(this.x, (this.x + this.width));
                var posY = this._getRandNum(this.y, (this.y + this.height));
                this._meteorList.push(new objects.Meteor("meteor", posX, posY));
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