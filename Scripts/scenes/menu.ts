/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        private _moon : objects.Moon; // Moon
        private _meteor : objects.Meteor; // Meteor
        private amountOnScreen : number = 3; // amount of meteors allowed on canvas at once
        private _mf : objects.Meteor_Factory;

        private _playBtn : objects.Button;
        private _rulzBtn : objects.Button;

        private _titleImage : createjs.Bitmap;

        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._mf = new objects.Meteor_Factory();
            this._mf._amountOnScreen = 4;

            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);

            this._playBtn = new objects.Button("Play_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            this._rulzBtn = new objects.Button("Rules_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 16);
            this.addChild(this._rulzBtn);
            this._rulzBtn.on("click", this.__rulzBtnBtnClick, this);

            this._titleImage = new createjs.Bitmap(assets.getResult("Title_Image"));
            this._titleImage.x = config.Screen.CENTER_X - 100;
            this._titleImage.y = -15;

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
            this._mf.update();

            this.addChild(this._moon);
            this.addChild(this._playBtn);
            this.addChild(this._rulzBtn);
            this.addChild(this._titleImage);
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.PLAY;
            changeScene();
        }

        private __rulzBtnBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.RULES;
            changeScene();
        }
    }
}