module objects{
    export class Explosion extends objects.GameObject {

        private _deathTimer : number = 0;

        constructor(imageString:string, posX : number, posY: number) {
            super(gameAtlas, imageString,"");
            this.x = posX;
            this.y = posY;
        }

        public update (){
            this._deathTimer += createjs.Ticker.interval;
            console.log(this._deathTimer);

            if(this.currentAnimationFrame == gameAtlas.getNumFrames("explode") - 1){
                currentScene.removeChild(this);
            }
        }
    }
}