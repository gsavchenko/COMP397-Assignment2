/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Meteor_Manager
    Description:    Meteor_Manager class extends GameObject and manages creation/destruction of meteors
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Added Comments  
*/
module objects {
    export class Meteor_Manager extends objects.GameObject {
        
        // Public variables
        public _meteorList : objects.Meteor[];
        public _amountOnScreen : number; // amount of meteors allowed on the screen at once

        // Private variables
        private _explosion : objects.Explosion;
        
        // Create meteor from gameAtlas which stores animation frames
        constructor() {
            super(gameAtlas, "", "");
        }

        // initialize variables
        public start() : void {
            this._amountOnScreen = 4;
            this._meteorList = new Array<objects.Meteor>();
            // Set Spawn Area
            this.x = 50;
            this.y = -300;
            this.height = 500;
            this.width = 500;

            this._createMeteor(this._amountOnScreen);
        }

         // This could be better (contines updating after scene switch and doesn't need to check death every frame)
        public update() : void {

            // Search through the meteor_list and update it
            for(var x = 0; x < this._meteorList.length; x++){
                this._meteorList[x].update();
                
                if(this._meteorList[x].isDead)
                {
                    // Memory leak (final frame of explosion is invisivle instead of being removed from the scene)
                    currentScene.addChild(this._explosion = new objects.Explosion("explosion", this._meteorList[x].x, this._meteorList[x].y));
                    // Remove dead meteors from scene then the list and then add another to the list
                    currentScene.removeChild(this._meteorList[x]);
                    this._meteorList.splice(x,1);
                    this._createMeteor(1);                  
                }
            }
            
            // Add the meteors in the list to the scene
            this._meteorList.forEach(element => {
                currentScene.addChild(element);
            });
        }

        // Creates a meteor and adds it to the meteor_list
        private _createMeteor(amount : number) : void{
            for (var x = 0; x < amount; x ++){
                // Temporarily store random numbers (should increase as time goes on in the future)
                var posX = this._getRandNum(this.x, (this.x + this.width));
                var posY = this._getRandNum(this.y, (this.y+this.height));
                var speed = this._getRandNum(3, 6);

                this._meteorList.push(new objects.Meteor("meteor", posX, posY, speed));
            }
        }

        // Helper method that returns random number between range
        private _getRandNum(min : number, max : number) : number {
            return Math.floor(Math.random() * max) + min;
        }
    }
}