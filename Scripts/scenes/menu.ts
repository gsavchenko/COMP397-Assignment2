/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        private _moon : objects.Moon; // Moon
        //private _meteor : objects.Meteor; // Meteor
        private _mf : objects.Meteor_Factory;

        private _playBtn : objects.Button;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            // Add metero to the menu scene
            //this._meteor = new objects.Meteor("meteor");
            //this.addChild(this._meteor);
            this._mf = new objects.Meteor_Factory(0,0,100, 600);
            //this.addChild(this._mf);

            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);

            this._playBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
            //this._meteor.update();
            //this._mf.update();
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.SHOOTER;
            changeScene();
        }
    }
}