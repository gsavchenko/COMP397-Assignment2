var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Play
    Description:    Play scene that contains all assets and functionality associated with the game itself
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Commented code and removed unnecessary variables

*/
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this._timer = 0;
            this._isGameOver = false; // Track if game is over
        }
        Play.prototype.start = function () {
            // Add moon to play scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);
            // Add astronaut to play scene
            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);
            // Add meteor manager to play scene
            this._mm = new objects.Meteor_Manager();
            this._mm._amountOnScreen = 5;
            // Add timer to play scene
            this._timer = 0;
            this._score = new objects.Label("HIGHSCORE: " + this._timer, "30px Impact", "#ffffff", 100, 25);
            this.addChild(this._score);
            // Create gameover image
            this._imageGameOver = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._imageGameOver.x = config.Screen.CENTER_X - 80;
            this._imageGameOver.y = -15;
            stage.addChild(this);
        };
        // Update objects in scene
        Play.prototype.update = function () {
            var _this = this;
            // Update timer until game is over
            if (!this._isGameOver)
                this._timer += createjs.Ticker.interval;
            // Update meteor manager, astronaut and score
            this._mm.update();
            this._astronaut.update();
            this._score.text = "HIGHSCORE: " + Math.round(this._timer) / 100;
            // Check for collision between astronaut and moon
            if (collision.boxCircleCheck(this._astronaut, this._moon)) {
                // Reset jumping
                this._astronaut._jumpTimer = 0;
                this._astronaut._falling = false;
                // Check for collision with moon
                if (this._astronaut.x < 300)
                    this._astronaut.collideRight = true;
                if (this._astronaut.x > 370)
                    this._astronaut.collideLeft = true;
            }
            else {
                // If not colliding with moon astronaut must be falling
                this._astronaut._falling = true;
                this._astronaut.collideRight = false;
                this._astronaut.collideLeft = false;
            }
            // Check every astroid in the meteor manager meteor list for collisions
            this._mm._meteorList.forEach(function (meteor) {
                // Check for collision with null
                if (collision.circleCircleCheck(meteor, _this._moon))
                    if (meteor != null)
                        meteor.isDead = true;
                // Check for collision with player (game over)
                if (collision.boxCircleCheck(_this._astronaut, meteor)) {
                    if (meteor != null) {
                        _this.removeChild(_this._astronaut);
                        _this._isGameOver = true;
                        _this._buttonMenu = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
                        _this._buttonMenu.on("click", _this.menuButtonClick, _this);
                    }
                }
            });
            // Draw on top of everything
            if (this._isGameOver) {
                this.addChild(this._buttonMenu);
                this.addChild(this._imageGameOver);
            }
        };
        Play.prototype.menuButtonClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map