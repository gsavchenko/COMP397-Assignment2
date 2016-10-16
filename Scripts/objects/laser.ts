module objects{
    export class Laser extends objects.GameObject {

        private _speed : number = 15;

        constructor() {
            super("laser", "");
        }

        public start() : void  {

        }

        public update() : void {
            super.update();
            this.position.x += this._speed;
        }

        public setPosition(newPosition:Vector2) : void {

            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }
}