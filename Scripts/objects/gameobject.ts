/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          GameObject
    Description:    Explosion class extends Sprite class for animatating/managing in game objects.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added Comments and added more contextual variable names 
*/
module objects {
    export class GameObject extends createjs.Sprite {

        // Private variables
        private _width:number;
        private _height:number;
        private _name:string;
        private _position:Vector2;
        private _CornerTopRight:Vector2;
        private _CornerTopLeft:Vector2;
        private _CornerBottomRight:Vector2;
        private _CornerBottomLeft:Vector2;

        // PUBLIC PROPERTIES
        get width() : number {
            return this._width
        }

        set width(w:number) {
            this._width = w;
        }

        get height() : number {
            return this._height
        }

        set height(h:number) {
            this._height = h;
        }

        get name() : string {
            return this._name;
        }

        set name(s:string) {
            this._name = s;
        }

        get position() : Vector2 {
            return this._position
        }

        set position(p:Vector2) {
            this._position = p;
        }

        get topRightCorner() : Vector2 {
            return new objects.Vector2(this.x + this.width * 0.5, this.y - this.height * 0.5);
        }

        get topLeftCorner() : Vector2 {
            return new objects.Vector2(this.x - this.width * 0.5, this.y - this.height * 0.5);
        }

        get bottomRightCorner() : Vector2 {
            return new objects.Vector2(this.x + this.width * 0.5, this.y + this.height * 0.5);
        }

        get bottomLeftCorner() : Vector2 {
            return new objects.Vector2(this.x - this.width * 0.5, this.y + this.height * 0.5);
        }

        constructor(atlas: createjs.SpriteSheet, imageString : string, deathAnimString) {
            super(atlas, imageString);

            this._initialize(imageString);
            this.start();
        }

        private _initialize(imageString:string):void {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.position = new Vector2(this.x, this.y);
        }

        public start():void {}
        public update():void {}
    }
}