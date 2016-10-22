var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    var Meteor_Manager = (function (_super) {
        __extends(Meteor_Manager, _super);
        // Create meteor from gameAtlas which stores animation frames
        function Meteor_Manager() {
            _super.call(this, gameAtlas, "", "");
        }
        // initialize variables
        Meteor_Manager.prototype.start = function () {
            this._amountOnScreen = 4;
            this._meteorList = new Array();
            // Set Spawn Area
            this.x = 50;
            this.y = -300;
            this.height = 500;
            this.width = 500;
            this._createMeteor(this._amountOnScreen);
        };
        // This could be better (contines updating after scene switch and doesn't need to check death every frame)
        Meteor_Manager.prototype.update = function () {
            // Search through the meteor_list and update it
            for (var x = 0; x < this._meteorList.length; x++) {
                this._meteorList[x].update();
                if (this._meteorList[x].isDead) {
                    // Memory leak (final frame of explosion is invisivle instead of being removed from the scene)
                    currentScene.addChild(this._explosion = new objects.Explosion("explosion", this._meteorList[x].x, this._meteorList[x].y));
                    // Remove dead meteors from scene then the list and then add another to the list
                    currentScene.removeChild(this._meteorList[x]);
                    this._meteorList.splice(x, 1);
                    this._createMeteor(1);
                }
            }
            // Add the meteors in the list to the scene
            this._meteorList.forEach(function (element) {
                currentScene.addChild(element);
            });
        };
        // Creates a meteor and adds it to the meteor_list
        Meteor_Manager.prototype._createMeteor = function (amount) {
            for (var x = 0; x < amount; x++) {
                // Temporarily store random numbers (should increase as time goes on in the future)
                var posX = this._getRandNum(this.x, (this.x + this.width));
                var posY = this._getRandNum(this.y, (this.y + this.height));
                var speed = this._getRandNum(3, 6);
                this._meteorList.push(new objects.Meteor("meteor", posX, posY, speed));
            }
        };
        // Helper method that returns random number between range
        Meteor_Manager.prototype._getRandNum = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        return Meteor_Manager;
    }(objects.GameObject));
    objects.Meteor_Manager = Meteor_Manager;
})(objects || (objects = {}));
//# sourceMappingURL=meteor_manager.js.map