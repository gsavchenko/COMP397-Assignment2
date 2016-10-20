module objects {
    export class Meteor_Factory extends objects.GameObject {
        
        // Private variables
        private _meteor: objects.Meteor;
        private _meteors: objects.Meteor[];
        private _spawnRate : number = 1; // meteors/sec
        private _amountOnScreen : number = 1;
        private _timer : number;

        // Create moon from gameAtlas which stores animation frames
        constructor(posX : number, posY : number, height : number, width : number) {
            super(gameAtlas, "", "");
            this.x = posX;
            this.y = posY;
            this.height = height;
            this.width = width;
        }

        public start() : void {
            
        }

        public update() : void {

        }
    }
}