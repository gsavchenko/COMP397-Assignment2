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
            this._timer = 0;
            this.timerStop = false;
            this._isGameOver = false;
        }
        Play.prototype.start = function () {
            console.log("Play Scene Started");
            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);
            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);
            this._mf = new objects.Meteor_Factory();
            this._mf._amountOnScreen = 5;
            this._timer = 0;
            this.score = new objects.Label("Score: " + this._timer, "30px Impact", "#ffffff", 75, 25);
            this.addChild(this.score);
            this._gameOverImage = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._gameOverImage.x = config.Screen.CENTER_X - 80;
            this._gameOverImage.y = -15;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            var _this = this;
            if (!this.timerStop)
                this._timer += createjs.Ticker.interval;
            this._mf.update();
            this._astronaut.update();
            this.score.text = "HIGHSCORE: " + Math.round(this._timer) / 100;
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
            this._mf._meteorList.forEach(function (meteor) {
                if (collision.circleCircleCheck(meteor, _this._moon))
                    if (meteor != null)
                        meteor.isDead = true;
                if (collision.boxCircleCheck(_this._astronaut, meteor)) {
                    _this.timerStop = true;
                    _this.removeChild(_this._astronaut);
                    _this._isGameOver = true;
                    _this._menuBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
                    _this._menuBtn.on("click", _this._menuBtnClick, _this);
                }
            });
            if (this._isGameOver) {
                this.addChild(this._menuBtn);
                this.addChild(this._gameOverImage);
            }
        };
        Play.prototype._menuBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map