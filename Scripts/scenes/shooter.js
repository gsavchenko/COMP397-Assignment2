var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Shooter = (function (_super) {
        __extends(Shooter, _super);
        function Shooter() {
            _super.call(this);
        }
        Shooter.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("Game_BG"));
            this.addChild(this._bg);
            this._mouth_back = new createjs.Bitmap(assets.getResult("Mouth_Back"));
            this._mouth_back.x = 141;
            this._mouth_back.y = 238;
            this.addChild(this._mouth_back);
            this._teeth_top_back_left = new objects.Tooth("tooth");
            this._teeth_top_back_left.x = 148;
            this._teeth_top_back_left.y = 235;
            this.addChild(this._teeth_top_back_left);
            //this._ship = new objects.Player("ship");
            //this.addChild(this._ship);
            this._teeth_top_left_left = new createjs.Bitmap(assets.getResult("Teeth_Top_Middle"));
            this._teeth_top_left_left.x = 171;
            this._teeth_top_left_left.y = 234;
            this.addChild(this._teeth_top_left_left);
            this._teeth_top_left_right = new createjs.Bitmap(assets.getResult("Teeth_Top_Middle"));
            this._teeth_top_left_right.x = 191;
            this._teeth_top_left_right.y = 235;
            this.addChild(this._teeth_top_left_right);
            this._teeth_top_front_left = new createjs.Bitmap(assets.getResult("Teeth_Top_Front"));
            this._teeth_top_front_left.x = 211;
            this._teeth_top_front_left.y = 233;
            this.addChild(this._teeth_top_front_left);
            this._teeth_top_front_right = new createjs.Bitmap(assets.getResult("Teeth_Top_Front"));
            this._teeth_top_front_right.x = 277;
            this._teeth_top_front_right.y = 237;
            this.addChild(this._teeth_top_front_right);
            this._teeth_top_right_left = new createjs.Bitmap(assets.getResult("Teeth_Top_Middle"));
            this._teeth_top_right_left.x = 344;
            this._teeth_top_right_left.y = 240;
            this.addChild(this._teeth_top_right_left);
            this._teeth_top_right_right = new createjs.Bitmap(assets.getResult("Teeth_Top_Middle"));
            this._teeth_top_right_right.x = 364;
            this._teeth_top_right_right.y = 243;
            this.addChild(this._teeth_top_right_right);
            this._teeth_top_back_right = new createjs.Bitmap(assets.getResult("Teeth_Top_Back"));
            this._teeth_top_back_right.x = 384;
            this._teeth_top_back_right.y = 244;
            this.addChild(this._teeth_top_back_right);
            this._teeth_bottom_back_left = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Back"));
            this._teeth_bottom_back_left.x = 161;
            this._teeth_bottom_back_left.y = 343;
            this.addChild(this._teeth_bottom_back_left);
            this._teeth_bottom_left_left = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Middle"));
            this._teeth_bottom_left_left.x = 184;
            this._teeth_bottom_left_left.y = 352;
            this.addChild(this._teeth_bottom_left_left);
            this._teeth_bottom_left_right = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Middle"));
            this._teeth_bottom_left_right.x = 204;
            this._teeth_bottom_left_right.y = 355;
            this.addChild(this._teeth_bottom_left_right);
            this._teeth_bottom_front_left = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Front"));
            this._teeth_bottom_front_left.x = 222;
            this._teeth_bottom_front_left.y = 352;
            this.addChild(this._teeth_bottom_front_left);
            this._teeth_bottom_front_right = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Front"));
            this._teeth_bottom_front_right.x = 277;
            this._teeth_bottom_front_right.y = 357;
            this.addChild(this._teeth_bottom_front_right);
            this._teeth_bottom_right_left = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Middle"));
            this._teeth_bottom_right_left.x = 331;
            this._teeth_bottom_right_left.y = 361;
            this.addChild(this._teeth_bottom_right_left);
            this._teeth_bottom_right_right = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Middle"));
            this._teeth_bottom_right_right.x = 350;
            this._teeth_bottom_right_right.y = 358;
            this.addChild(this._teeth_bottom_right_right);
            this._teeth_bottom_back_right = new createjs.Bitmap(assets.getResult("Teeth_Bottom_Back"));
            this._teeth_bottom_back_right.x = 370;
            this._teeth_bottom_back_right.y = 352;
            this.addChild(this._teeth_bottom_back_right);
            this._mouth_lips = new createjs.Bitmap(assets.getResult("Mouth_Lips"));
            this._mouth_lips.x = 141;
            this._mouth_lips.y = 198;
            this.addChild(this._mouth_lips);
            this._ship = new objects.Player("ship");
            this.addChild(this._ship);
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            stage.cursor = 'none';
            this._cursor = new createjs.Bitmap(assets.getResult("Cursor"));
            this._cursor.x = stage.mouseX;
            this._cursor.y = stage.mouseY;
            this.addChild(this._cursor);
            stage.addChild(this);
        };
        Shooter.prototype.update = function () {
            stage.cursor = 'none';
            this._cursor.x = stage.mouseX;
            this._cursor.y = stage.mouseY;
            // Check collisions
            for (var _i = 0, _a = this._ship.getShots; _i < _a.length; _i++) {
                var i = _a[_i];
                collision.check(i, this._enemy);
            }
            this._ship.update();
            this._enemy.update();
        };
        return Shooter;
    }(objects.Scene));
    scenes.Shooter = Shooter;
})(scenes || (scenes = {}));
//# sourceMappingURL=shooter.js.map