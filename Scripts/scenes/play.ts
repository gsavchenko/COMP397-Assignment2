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
module scenes {
    export class Play extends objects.Scene {

        // Private variables
        private _astronaut : objects.Player; // Player
        private _mm : objects.Meteor_Manager; // Meteor manager
        private _moon : objects.Moon; // Moon
        private _imageGameOver : createjs.Bitmap; // Game over image
        private _buttonMenu : objects.Button; // Menu button        
        private _timer : number = 0;
        private _score : objects.Label; // Score label        
        private _isGameOver : boolean = false; // Track if game is over
        
        constructor() {
            super();
        }

        public start() : void {
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
            this._score = new objects.Label("HIGHSCORE: " + this._timer, "30px Impact","#ffffff", 100, 25);
            this.addChild(this._score);

            // Create gameover image
            this._imageGameOver = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._imageGameOver.x = config.Screen.CENTER_X - 80;
            this._imageGameOver.y = -15;

            stage.addChild(this);
        }

        // Update objects in scene
        public update() : void {
            // Update timer until game is over
            if(!this._isGameOver)
                this._timer += createjs.Ticker.interval;
            
            // Update meteor manager, astronaut and score
            this._mm.update();
            this._astronaut.update();
            this._score.text = "HIGHSCORE: " + Math.round(this._timer)/100;
            
            // Check for collision between astronaut and moon
            if(collision.boxCircleCheck(this._astronaut, this._moon)){

                // Reset jumping
                this._astronaut._jumpTimer = 0;
                this._astronaut._falling = false;

                // Check for collision with moon
                if(this._astronaut.x < 300)
                    this._astronaut.collideRight = true;
                if(this._astronaut.x > 370)
                    this._astronaut.collideLeft = true;
            }
            else{
                // If not colliding with moon astronaut must be falling
                this._astronaut._falling = true;
                this._astronaut.collideRight = false;
                this._astronaut.collideLeft = false;
            }

            // Check every astroid in the meteor manager meteor list for collisions
            this._mm._meteorList.forEach(meteor => {

                // Check for collision with null
                if(collision.circleCircleCheck(meteor, this._moon))
                    if(meteor != null)
                        meteor.isDead = true;
                
                // Check for collision with player (game over)
                if(collision.boxCircleCheck(this._astronaut, meteor)){
                    if(meteor != null){
                        this.removeChild(this._astronaut);
                        this._isGameOver = true;
                        this._buttonMenu = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
                        this._buttonMenu.on("click", this.menuButtonClick, this);
                    }
                }
            });

            // Draw on top of everything
            if(this._isGameOver){               
                this.addChild(this._buttonMenu);
                this.addChild(this._imageGameOver)
            }
        }

        private menuButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}