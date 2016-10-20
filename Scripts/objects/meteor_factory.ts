module objects {
    export class Meteor_Factory extends objects.GameObject {
        
        // Public variables
        public _meteorList : Array<objects.Meteor>;
        public _meteor : objects.Meteor;
        public _amountOnScreen : number; // amount of meteors allowed on the screen at once
        
        // Create moon from gameAtlas which stores animation frames
        constructor() {
            super(gameAtlas, "", "");
        }

        public start() : void {

            // initialize variables here
            this._amountOnScreen = 3;
            //this._meteorList[3];
            //this._meteorList.length = 3;
            this.x = 50;
            this.y = 100;
            this.height = 200;
            this.width = 500;

            for (var x = 0; x < this._amountOnScreen; x ++){
                //this._meteorList[x] = new objects.Meteor("meteor",100,100);
                this._createMeteor();       
            }
        }

        public update() : void {

        }

        private _createMeteor() : void{
            var posX = this._getRandNum(this.x, (this.x + this.width));
            var posY = this._getRandNum(this.y, (this.y+this.height));
            this._meteor = new objects.Meteor("meteor", posX, posY);
        }

    private _getRandNum(min : number, max : number) : number {
            return Math.floor(Math.random() * max) + min;
        }
    }
}