module objects {
    export class Meteor_Factory extends objects.GameObject {
        
        // Public variables
        public _meteorList : objects.Meteor[];
        public _meteor : objects.Meteor;
        public _amountOnScreen : number; // amount of meteors allowed on the screen at once
        public timer : number;
        
        // Create moon from gameAtlas which stores animation frames
        constructor() {
            super(gameAtlas, "", "");
        }

        public start() : void {

            // initialize variables here
            this._amountOnScreen = 4;
            this._meteorList = new Array<objects.Meteor>();
            //this._meteorList.length = 3;
            this.x = 50;
            this.y = -300;
            this.height = 500;
            this.width = 500;
            this.timer = 0;

            this._createMeteor(this._amountOnScreen);
        }
         // this could be better (contines updating after scene switch and doesn't need to check death every frame)
        public update() : void {
            this.timer += createjs.Ticker.interval;
            //console.log(this.timer);

            for(var x = 0; x < this._meteorList.length; x++){
                this._meteorList[x].update();
                
                if(this._meteorList[x].isDead)
                {
                    currentScene.removeChild(this._meteorList[x]);
                    this._meteorList.splice(x,1);
                    this._createMeteor(1);                  
                }
            }
        }

        public _createMeteor(amount : number) : void{
            for (var x = 0; x < amount; x ++){
                var posX = this._getRandNum(this.x, (this.x + this.width));
                var posY = this._getRandNum(this.y, (this.y+this.height));
                var speed = this._getRandNum(3, 6);
                this._meteorList.push(new objects.Meteor("meteor", posX, posY, speed));
            }
        }

    private _getRandNum(min : number, max : number) : number {
            return Math.floor(Math.random() * max) + min;
        }
    }
}