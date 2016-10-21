module objects {
    export class Moon extends objects.GameObject {

        public radius : number; // 330
        public center : objects.Vector2; // x : 334, y : 575

        // Create moon from gameAtlas which stores animation frames
        constructor(imageString:string, posX:number, posY:number) {
            super(gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
            this.center = new Vector2(320, 805);
            this.radius = 400;
        }
    }
}