module objects {
    export class Meteor extends objects.GameObject {
        
        // Private variables
        private _speed : number = 3;

        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string) {
            super(gameAtlas, imageString, "");
            this.x = this._getRandNum(50, 600);
            this.y = 100;
        }

        private _getRandNum(min : number, max : number) : number {
            return Math.floor(Math.random() * max) + min;
        }

        public update() : void {
            console.log("update");
            this.y = this.y + this._speed;
        }
        
    }
}