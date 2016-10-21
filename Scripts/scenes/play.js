var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
        }
        Play.prototype.start = function () {
            console.log("Play Scene Started");
            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);
            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._astronaut.update();
            console.log(this._astronaut.y);
            if (collision.boxCircleCheck(this._astronaut, this._moon)) {
                this._astronaut._jumpTimer = 0;
                this._astronaut._falling = false;
                if (this._astronaut.x < 300)
                    this._astronaut.collideRight = true;
                if (this._astronaut.x > 370)
                    this._astronaut.collideLeft = true;
            }
            else {
                this._astronaut._falling = true;
                this._astronaut.collideRight = false;
                this._astronaut.collideLeft = false;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map