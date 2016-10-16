module objects {
    export class Tooth extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(positionX:number, positionY:number) {
            super("tooth", "");

            this.name = "tooth";
            this.position = new objects.Vector2(positionX, positionY);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

        }

        public update() : void {
            super.update();
        }
    }
}