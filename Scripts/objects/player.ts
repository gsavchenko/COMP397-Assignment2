module objects {
    export class Player extends objects.GameObject {

        private _keyPressed : number;

        private _timeBetweenShots : number = 1;
        private _timer : number = 0;
        private _leftAnimationStarted : boolean = false;
        private _rightAnimationStarted : boolean = false;
        private _fallSpeed : number = 2;
        public _falling : boolean = true;
        public _jumpTimer : number = 0;
        private _isJumping : boolean = false;
        public collideLeft : boolean = false;
        public collideRight : boolean = false;

        // PUBLIC VARIABLES
        public name:string;
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;

        constructor(imageString:string) {
            super(gameAtlas, imageString, "");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        public start() {
            this.x = 320;
            this.y = 390;
        }

        public update() : void {
            super.update();

            this._timer += createjs.Ticker.interval;

            if(controls.RIGHT) {
                this.moveRight();
            }

            if(controls.LEFT) {
                this.moveLeft();
            }
            if(controls.JUMP ) {
                this.jump();
            }

            if(!controls.LEFT && !controls.RIGHT && !controls.JUMP){
                this._leftAnimationStarted = false;
                this._rightAnimationStarted = false;
                this.gotoAndPlay("player_stand");
            }

            if(this._falling)
                this.y += this._fallSpeed;
        }

        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
                case keys.A:
                    console.log("A key pressed");
                    controls.LEFT = true;
                    break;
                case keys.D:
                    console.log("D key pressed");
                    controls.RIGHT = true;
                    break;
                case keys.SPACE:
                    controls.JUMP = true;
                    break;
            }
        }

        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.A:
                    controls.LEFT = false;
                    break;
                case keys.D:
                    controls.RIGHT = false;
                    break;
                case keys.SPACE:
                    controls.JUMP = false;
                    break;
            }
        }

        public moveLeft() {
            if(!this._leftAnimationStarted && controls.LEFT)
            {
                this._leftAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }

            if(this.collideLeft){
                this.x -= 5;
                this.y -= 4;
            }
            else
                this.x -=5;
        }

        public moveRight() {
                if(!this._rightAnimationStarted && controls.RIGHT)
                {
                    this._rightAnimationStarted = true;
                    this.gotoAndPlay("player_move_left");
                }

            if(this.collideRight){
                this.x += 5;
                this.y -= 4;
            }
            else
                this.x += 5;
        }

        public jump() {
            if(this._jumpTimer <= 25)
            {
                this._jumpTimer ++;
                this.gotoAndPlay("player_jump");
                this.y -= 8;
            }            
        }
    }
}