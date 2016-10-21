module scenes {
    export class Play extends objects.Scene {

        // Private variable declaration
        private _moon : objects.Moon; // Moon

        private _bg : createjs.Bitmap;

        private _astronaut : objects.Player;
        private _enemy : objects.Enemy;
        private _cursor : createjs.Bitmap;

        constructor() {
            super();
        }

        public start() : void {
            console.log("Play Scene Started");

            // Add moon to menu scene
            this._moon = new objects.Moon("moon", 330, 500);
            this.addChild(this._moon);

            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);

            stage.addChild(this);
        }

        public update() : void {
            this._astronaut.update();
            console.log(this._astronaut.y);

            if(collision.boxCircleCheck(this._astronaut, this._moon))
                this._astronaut._falling = false;
            else
               this._astronaut._falling = true;
        }
    }
}