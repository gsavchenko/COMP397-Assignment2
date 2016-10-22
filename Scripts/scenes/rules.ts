/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Rules extends objects.Scene {

        // Private instance variables
        private _moon : objects.Moon; // Moon
        private _meteor : objects.Meteor; // Meteor
        private amountOnScreen : number = 3; // amount of meteors allowed on canvas at once
        private _mf : objects.Meteor_Manager;

        private _menuBtn : objects.Button;
        private _rules : createjs.Bitmap;

        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Rules Scene Started");

            this._mf = new objects.Meteor_Manager();
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
        }

        public update() : void {
            this._mf.update();

            this.addChild(this._moon);
            this.addChild(this._rules);
            this.addChild(this._menuBtn);
        }

        private __menuBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}