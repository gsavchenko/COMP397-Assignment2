module objects {
    export class Meteor extends objects.GameObject {
        
        // Private variables
        public static id : number = 0;
        public isDead : boolean;

        private _speed : number = 4;

        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string, posX : number, posY: number, speed : number) {
            super(gameAtlas, imageString, "");
            this.id ++;
            this.name = "meteor";
            this.x = posX;
            this.y = posY;
            this._speed = speed;
            this.isDead = false;

            console.log("Meteor: " + this.id + " made");
            console.log("x: " + this.x + " y " + this.y + " speed: " + this._speed);
        }

        public update() : void {
            console.log("update");
            this.y = this.y + this._speed;
            
            if(this.y > 580)
                this.isDead = true;
        }
        
    }
}