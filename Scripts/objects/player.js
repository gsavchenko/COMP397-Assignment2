var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, gameAtlas, imageString, "");
            this._timeBetweenShots = 1;
            this._timer = 0;
            this._leftAnimationStarted = false;
            this._rightAnimationStarted = false;
            this._fallSpeed = 2;
            this._falling = true;
            this._shots = [];
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        Player.prototype.start = function () {
            this.x = 320;
            this.y = 390;
        };
        Object.defineProperty(Player.prototype, "getShots", {
            get: function () {
                return this._shots;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.update = function () {
            _super.prototype.update.call(this);
            this._timer += createjs.Ticker.interval;
            if (controls.DOWN) {
                this.moveDown();
            }
            if (controls.RIGHT) {
                this.moveRight();
            }
            if (controls.LEFT) {
                this.moveLeft();
            }
            if (controls.JUMP) {
                this.jump();
            }
            for (var _i = 0, _a = this._shots; _i < _a.length; _i++) {
                var laser = _a[_i];
                laser.update();
            }
            if (!controls.LEFT && !controls.RIGHT) {
                this._leftAnimationStarted = false;
                this._rightAnimationStarted = false;
                this.gotoAndPlay("player_stand");
            }
            if (this._falling)
                this.y += this._fallSpeed;
        };
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
                case keys.A:
                    console.log("A key pressed");
                    controls.LEFT = true;
                    break;
                case keys.D:
                    console.log("D key pressed");
                    controls.RIGHT = true;
                    break;
                case keys.SPACE:
                    controls.JUMP = true;
                    break;
            }
        };
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.S:
                    controls.DOWN = false;
                    break;
                case keys.A:
                    controls.LEFT = false;
                    break;
                case keys.D:
                    controls.RIGHT = false;
                    break;
                case keys.SPACE:
                    controls.JUMP = false;
                    break;
            }
        };
        Player.prototype.moveDown = function () {
            this.y += 5;
        };
        Player.prototype.moveLeft = function () {
            if (!this._leftAnimationStarted && controls.LEFT) {
                this._leftAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            this.x -= 5;
        };
        Player.prototype.moveRight = function () {
            if (!this._rightAnimationStarted && controls.RIGHT) {
                this._rightAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            this.x += 5;
        };
        Player.prototype.jump = function () {
            this.y -= 5;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map