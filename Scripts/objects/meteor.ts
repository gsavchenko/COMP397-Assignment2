/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Meteor
    Description:    Meteor class extends GameObject and creates/updates meteor objects.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added Comments  
*/
module objects {
    export class Meteor extends objects.GameObject {
        
        // Public variables
        public isDead : boolean = false; // should the meteor be destroyed?
        public radius : number = 26; // fix magic number
        public center : objects.Vector2;

        // Private variables
        private static _id : number = 0;
        private _speed : number = 4;

        // Create meteor from gameAtlas which stores animation frames and store relevant information
        constructor(imageString:string, posX : number, posY: number, speed : number) {
            super(gameAtlas, imageString, "");
            this._id ++;
            this.x = posX;
            this.y = posY;
            this._speed = speed;
        }

        // Update the meteor's position and center (for collision detectioni)
        public update() : void {
            this.y = this.y + this._speed;
            this.center = new Vector2(this.x, this.y);

            // If the meteor is off the screen destroy it
            if(this.y > 580) // fix magic number
                this.isDead = true;
        }        
    }
}