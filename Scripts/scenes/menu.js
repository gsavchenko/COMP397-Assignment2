var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Menu
    Description:    Menu scene that contains all assets and functionality associated with the menu itself
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Commented code

*/
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            // Create meteor factory
            this._mm = new objects.Meteor_Manager();
            this._mm._amountOnScreen = 4;
            // Create moon
            this._moon = new objects.Moon("moon", 330, 500);
            // Create play button
            this._buttonPlay = new objects.Button("Play_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
            this._buttonPlay.on("click", this._playButtonClick, this);
            // Create rules button
            this._buttonRules = new objects.Button("Rules_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 16);
            this._buttonRules.on("click", this._rulesButtonClick, this);
            // Create title image
            this._imageTitle = new createjs.Bitmap(assets.getResult("Title_Image"));
            this._imageTitle.x = config.Screen.CENTER_X - 100;
            this._imageTitle.y = -15;
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
            // Draw scene objects in order
            this._mm.update();
            this.addChild(this._moon);
            this.addChild(this._buttonPlay);
            this.addChild(this._buttonRules);
            this.addChild(this._imageTitle);
        };
        // Play button handler method
        Menu.prototype._playButtonClick = function (event) {
            scene = config.Scene.PLAY;
            changeScene();
        };
        // Rules button handler method
        Menu.prototype._rulesButtonClick = function (event) {
            scene = config.Scene.RULES;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map