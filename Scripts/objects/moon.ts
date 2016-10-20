module objects {
    export class Moon extends objects.GameObject {
        
        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string, posX:number, posY:number) {
            super(gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
        }
    }
}