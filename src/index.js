import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

import { GridMaterial } from "@babylonjs/materials/grid";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");

// Associate a Babylon Engine to it.
const engine = new Engine(canvas);

// Create our first scene.
let scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
let camera = new FreeCamera("camera1", new Vector3(500, 20, 0), scene);

// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);
// camera.checkCollisions = true;
camera.applyGravity = true;
// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
let light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.7;

// Create a grid material
let material = new StandardMaterial("standard", scene);

// WING C
let C_wall_1 = MeshBuilder.CreateBox('wall1',{ height:60,width:340,depth:2 },scene);
	C_wall_1.position = {x:-190,y:30,z:-450};
	C_wall_1.checkCollisions = true;
	C_wall_1.material = material;
let C_wall_2 = MeshBuilder.CreateBox('wall2',{ height:60,width:400,depth:2 },scene);
	C_wall_2.position = { x:-220,y:30,z:-280 };
	C_wall_2.checkCollisions = true;
let C_wall_3 = MeshBuilder.CreateBox('wall3',{ height:60,width:2,depth:140 },scene);
	C_wall_3.position = { x:-420,y:30,z:-350 }
	C_wall_3.material = material;
let C_wall_4 = MeshBuilder.CreateBox('wall4',{ height:60,width:400,depth:2 },scene);
	C_wall_4.position = { x:-220,y:30,z:-400 };
	C_wall_4.material = material;
let C_wall_5 = MeshBuilder.CreateBox('wall5',{ height:60,width:400,depth:2 },scene);
	C_wall_5.position = { x:-220,y:30,z:-350 };
	C_wall_5.material = material;
let C_wall_6 = MeshBuilder.CreateBox('wall6',{ height:60,width:2,depth:70 },scene);
	C_wall_6.position = { x:-20,y:30,z:-315 };
	C_wall_6.material = material;
let C_wall_7 = MeshBuilder.CreateBox('wall7',{ height:60,width:2,depth:50 },scene);
	C_wall_7.position = { x:-20,y:30,z:-425 };
	C_wall_7.material = material;
let C_wall_8 = MeshBuilder.CreateBox('wall8',{ height:60,width:2,depth:50 },scene);
	C_wall_8.position = { x:-360,y:30,z:-425 };
	C_wall_8.material = material;

let C_wall_9 = MeshBuilder.CreateBox('wall9',{ height:60,width:180,depth:80 },scene);
	C_wall_9.position = { x:180,y:30,z:-320 }
	C_wall_9.material = material;


// PSLH A
let PSLHA = MeshBuilder.CreateBox('PSLHA',{ height:60,width:180,depth:100},scene)
	PSLHA.position = { x:-110,y:30,z:-100 };
	PSLHA.material = material;
// PSLH B
let PSLHB = MeshBuilder.CreateBox('PSLHA',{ height:60,width:180,depth:100},scene)
	PSLHB.position = { x:-110,y:30,z:0 };
	PSLHB.material = material;


// Wing B
let B_wall_1 = MeshBuilder.CreateBox('B_wing_1',{ height:60,width:300,depth:2 },scene);
	B_wall_1.position = { x:240,y:30,z:50 };
	B_wall_1.material = material;
let B_wall_2 = MeshBuilder.CreateBox('B_wing_2',{ height:60,width:260,depth:2 },scene);
	B_wall_2.position = { x:220,y:30,z:0 };
	B_wall_2.material = material;
let B_wall_3 = MeshBuilder.CreateBox('B_wing_3',{ height:60,width:220,depth:2 },scene);
	B_wall_3.position = { x:240,y:30,z:-50 };
	B_wall_3.material = material;
let B_wall_4 = MeshBuilder.CreateBox('B_wing_4',{ height:60,width:260,depth:2 },scene);
	B_wall_4.position = { x:220,y:30,z:-100 };
	B_wall_4.material = material;
let B_wall_5 = MeshBuilder.CreateBox('B_wing_5',{ height:60,width:2,depth: 160 }, scene);
	B_wall_5.position = { x:390,y:30,z:-20};
	B_wall_5.material = material;
let B_wall_6 = MeshBuilder.CreateBox('B_wing_6',{ height:60,width:2,depth:60})
	B_wall_6.position = { x:90,y:30,z:20 }
	B_wall_6.material = material;


let ground = Mesh.CreateGround("ground1", 1000, 1000, 2, scene);
ground.checkCollisions = true;
ground.material = new GridMaterial("grid", scene);


// Render every frame
engine.runRenderLoop(() => {
    scene.render();
});