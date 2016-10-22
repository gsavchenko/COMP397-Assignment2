/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Moon
    Description:    Moon class extends GameObject and creates Moon
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added Comments  
*/
module objects {
    export class Moon extends objects.GameObject {

        // Public variables
        public radius : number; // 330
        public center : objects.Vector2 = new Vector2(320, 5);

        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string, posX:number, posY:number) {
            super(gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
            // Collision information
            this.center = new Vector2(320, 805);
            this.radius = 400;
        }
    }
}