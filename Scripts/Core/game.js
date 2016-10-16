/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var spriteSheetLoader;
var shipAtlas;
var currentScene;
var scene;
var collision;
// Preload Assets required
var assetData = [
    { id: "Game_BG", src: "../../Assets/images/game_background.png" },
    { id: "Mouth_Lips", src: "../../Assets/images/mouth_lips.png" },
    { id: "Mouth_Back", src: "../../Assets/images/mouth_back.png" },
    { id: "Game_BG", src: "../../Assets/images/game_background.png" },
    { id: "Menu_BG", src: "../../Assets/images/menu_background.png" },
    { id: "Menu_Button", src: "../../Assets/images/menu_button.png" },
    { id: "Laser", src: "../../Assets/images/laser.png" },
    { id: "Player", src: "../../Assets/images/shipAtlas.png" },
    { id: "Teeth_Top_Back", src: "../../Assets/images/top_back.png" },
    { id: "Teeth_Top_Middle", src: "../../Assets/images/top_middle.png" },
    { id: "Teeth_Top_Front", src: "../../Assets/images/top_front.png" },
    { id: "Teeth_Bottom_Back", src: "../../Assets/images/bottom_back.png" },
    { id: "Teeth_Bottom_Middle", src: "../../Assets/images/bottom_middle.png" },
    { id: "Teeth_Bottom_Front", src: "../../Assets/images/bottom_front.png" },
    { id: "Cursor", src: "../../Assets/images/cursor.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    collision = new managers.Collision();
    var atlasData = {
        "images": [
            assets.getResult("Player")
        ],
        "frames": [
            [1, 1, 180, 180, 0, 0, 0],
            [183, 1, 176, 175, 0, 0, 0],
            [361, 1, 172, 163, 0, 0, 0],
            [535, 1, 166, 154, 0, 0, 0],
            [703, 1, 157, 154, 0, 0, 0],
            [862, 1, 122, 112, 0, 0, 0],
            [862, 115, 129, 111, 0, 0, 0],
            [535, 157, 69, 71, 0, 0, 0],
            [361, 166, 50, 6, 0, 0, -17],
            [413, 166, 42, 43, 0, 0, 0],
            [361, 174, 42, 33, 0, 0, 0],
            [457, 166, 42, 22, 0, 0, 0]
        ],
        "animations": {
            "explode": {
                "frames": [7, 6, 3, 0, 1, 2, 4], "speed": 0.1, next: false
            },
            "enemy": { "frames": [5] },
            "laser": { "frames": [8] },
            "ship": { "frames": [9] },
            "ship_L1": { "frames": [10] },
            "ship_L2": { "frames": [11] }
        },
        "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:013a2fc3dc6ba39276db3e6758d1ddbd:84789f29f2d01b3ea1c113a3b2d1bfdc:e696b1a5c9e543dbf26d7c8d29a6d04f$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    shipAtlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            ;
            console.log("Starting MENU scene");
            break;
        case config.Scene.SHOOTER:
            stage.removeAllChildren();
            currentScene = new scenes.Shooter();
            console.log("Starting SHOOTER scene");
            break;
    }
}
//# sourceMappingURL=game.js.map