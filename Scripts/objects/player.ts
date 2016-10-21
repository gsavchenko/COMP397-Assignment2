module objects {
    export class Player extends objects.GameObject {

        private _keyPressed : number;
        private _shots : objects.Laser[];

        private _timeBetweenShots : number = 1;
        private _timer : number = 0;
        private _leftAnimationStarted : boolean = false;
        private _rightAnimationStarted : boolean = false;
        private _fallSpeed : number = 2;
        public _falling : boolean = true;

        // PUBLIC VARIABLES
        public name:string;
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;

        constructor(imageString:string) {
            super(gameAtlas, imageString, "");

            this._shots = [];

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        public start() {
            this.x = 320;
            this.y = 390;
        }

        get getShots() : objects.Laser[] {
            return this._shots;
        }

        public update() : void {
            super.update();

            this._timer += createjs.Ticker.interval;
            
            if(controls.DOWN) {
                this.moveDown();
            }

            if(controls.RIGHT) {
                this.moveRight();
            }

            if(controls.LEFT) {
                this.moveLeft();
            }
            if(controls.JUMP ) {
                this.jump();
            }

            for (let laser of this._shots) {
                laser.update();
            }

            if(!controls.LEFT && !controls.RIGHT){
                this._leftAnimationStarted = false;
                this._rightAnimationStarted = false;
                this.gotoAndPlay("player_stand");
            }

            if(this._falling)
                this.y += this._fallSpeed;
        }

        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
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
                case keys.S:
                    controls.DOWN = false;
                    break;
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

        public moveDown() {
            this.y += 5;
        }

        public moveLeft() {
            if(!this._leftAnimationStarted && controls.LEFT)
            {
                this._leftAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }

            this.x -= 5;
        }

        public moveRight() {
            if(!this._rightAnimationStarted && controls.RIGHT)
            {
                this._rightAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            this.x += 5;
        }

        public jump() {
            this.y -= 5;
        }
    }
}