/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Rules = (function (_super) {
        __extends(Rules, _super);
        // Menu Class Contructor
        function Rules() {
            _super.call(this);
            this.amountOnScreen = 3; // amount of meteors allowed on canvas at once
        }
        Rules.prototype.start = function () {
            console.log("Rules Scene Started");
            this._mf = new objects.Meteor_Factory();
            this._mf._amountOnScreen = 4;
            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);
            this._rules = new createjs.Bitmap(assets.getResult("Rules"));
            this._menuBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 150);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this.__menuBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Rules.prototype.update = function () {
            this._mf.update();
            this.addChild(this._moon);
            this.addChild(this._rules);
            this.addChild(this._menuBtn);
        };
        Rules.prototype.__menuBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Rules;
    }(objects.Scene));
    scenes.Rules = Rules;
})(scenes || (scenes = {}));
//# sourceMappingURL=rules.js.map