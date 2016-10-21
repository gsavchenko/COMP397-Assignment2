module objects {
    export class Meteor extends objects.GameObject {
        
        // Private variables
        public static id : number = 0;
        public isDead : boolean;

        private _speed : number = 4;
        
        public radius : number; // 26
        public center : objects.Vector2; // x : 53, y : 87

        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string, posX : number, posY: number, speed : number) {
            super(gameAtlas, imageString, "");
            this.id ++;
            this.name = "meteor";
            this.x = posX;
            this.y = posY;
            this._speed = speed;
            this.isDead = false;

            this.radius = 26;
            console.log("Meteor: " + this.id + " made");
            console.log("x: " + this.x + " y " + this.y + " speed: " + this._speed);
        }

        public update() : void {
           // console.log("update");
            this.y = this.y + this._speed;
            this.center = new Vector2(this.x, this.y);
            
            if(this.y > 580)
                this.isDead = true;
        }        
    }
}