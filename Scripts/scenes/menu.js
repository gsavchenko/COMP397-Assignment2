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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
            this.amountOnScreen = 3; // amount of meteors allowed on canvas at once
        }
        Menu.prototype.start = function () {
            var _this = this;
            console.log("Menu Scene Started");
            this._mf = new objects.Meteor_Factory();
            this._mf._meteorList.forEach(function (element) {
                _this.addChild(element);
            });
            //this.amountOnScreen = 3;
            //for(var x = 0; x < this.amountOnScreen; x ++){
            //this._createMeteor();
            //}
            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);
            this._playBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
            this._mf.update();
        };
        Menu.prototype._playBtnClick = function (event) {
            scene = config.Scene.SHOOTER;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map