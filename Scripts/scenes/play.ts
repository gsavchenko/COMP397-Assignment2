module scenes {
    export class Play extends objects.Scene {

        // Private variable declaration
        private _moon : objects.Moon; // Moon

        private _bg : createjs.Bitmap;
        private _gameOverImage : createjs.Bitmap;  

        private _astronaut : objects.Player;
        private _enemy : objects.Enemy;
        private _cursor : createjs.Bitmap;
        private _mf : objects.Meteor_Factory;
        private _timer : number = 0;
        private score : objects.Label;
        private timerStop : boolean = false;
        private _menuBtn : objects.Button;
        private _isGameOver : boolean = false;

        constructor() {
            super();
        }

        public start() : void {
            console.log("Play Scene Started");

            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);

            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);

            this._mf = new objects.Meteor_Factory();
            this._mf._amountOnScreen = 5;

            this._timer = 0;
            this.score = new objects.Label("Score: " + this._timer, "30px Impact","#ffffff", 75, 25);
            this.addChild(this.score);

            this._gameOverImage = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._gameOverImage.x = config.Screen.CENTER_X - 80;
            this._gameOverImage.y = -15;

            stage.addChild(this);
        }

        public update() : void {
            if(!this.timerStop)
                this._timer += createjs.Ticker.interval;

            this._mf.update();
            this._astronaut.update();
            this.score.text = "HIGHSCORE: " + Math.round(this._timer)/100;

            if(collision.boxCircleCheck(this._astronaut, this._moon)){
                this._astronaut._jumpTimer = 0;
                this._astronaut._falling = false;

                if(this._astronaut.x < 300)
                    this._astronaut.collideRight = true;
                if(this._astronaut.x > 370)
                    this._astronaut.collideLeft = true;
            }
            else{
               this._astronaut._falling = true;
               this._astronaut.collideRight = false;
               this._astronaut.collideLeft = false;
            }

            this._mf._meteorList.forEach(meteor => {
                if(collision.circleCircleCheck(meteor, this._moon))
                    if(meteor != null)
                        meteor.isDead = true;
                if(collision.boxCircleCheck(this._astronaut, meteor)){
                    this.timerStop = true;
                    this.removeChild(this._astronaut);
                    this._isGameOver = true;
                     this._menuBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
                        this._menuBtn.on("click", this._menuBtnClick, this);
                }
            });

            if(this._isGameOver){
               
                this.addChild(this._menuBtn);
                this.addChild(this._gameOverImage)
            }
        }

        private _menuBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}