module objects {
    export class Meteor extends objects.GameObject {
        
        // Private variables
        public static id : number = 0;
        private _speed : number = 3;

        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string, posX : number, posY: number) {
            super(gameAtlas, imageString, "");
            this.id ++;
            this.x = posX;
            this.y = posY;
            console.log("Meteor: " + this.id + " made");
            console.log("x: " + this.x + " y " + this.y);
        }

        public update() : void {
            console.log("update");
            this.y = this.y + this._speed;
        }
        
    }
}