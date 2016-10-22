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
module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        private _mm : objects.Meteor_Manager; // Meteor manager
        private _meteor : objects.Meteor; // Meteor        
        private _moon : objects.Moon; // Moon
        private _amountOnScreen : number; // Amount of meteors allowed on canvas at once
        private _buttonPlay : objects.Button; // Play button
        private _buttonRules : objects.Button; // Instruction button
        private _imageTitle : createjs.Bitmap; // Title image

        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
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
        }

        public update() : void {

            // Draw scene objects in order
            this._mm.update();
            this.addChild(this._moon);
            this.addChild(this._buttonPlay);
            this.addChild(this._buttonRules);
            this.addChild(this._imageTitle);
        }

        // Play button handler method
        private _playButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.PLAY;
            changeScene();
        }
        // Rules button handler method
        private _rulesButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.RULES;
            changeScene();
        }
    }
}