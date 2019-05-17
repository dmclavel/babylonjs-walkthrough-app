import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

import { GridMaterial } from "@babylonjs/materials/grid";
import { StandardMaterial, Texture } from "@babylonjs/core";
import { createSomething, createChair, createStar, createTable, createBoard, createCPU, createMonitor } from './utils/create-objects/createSomething';

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";
import earcut from 'earcut';
window.earcut = earcut;

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");

// Associate a Babylon Engine to it.
const engine = new Engine(canvas);

// Create our first scene.
let scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
let camera = new FreeCamera("camera1", new Vector3(10, 10, 0), scene);

// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);
// camera.checkCollisions = true;
camera.applyGravity = true;
// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
let light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.9;

// Create a grid material
let material = new StandardMaterial("standard", scene);


createMonitor(scene);
createCPU(scene);

material = new StandardMaterial("wooden", scene);
material.diffuseTexture = new Texture("./assets/wood-texture.jpg", scene);

createChair(scene, 2, 0, 1, material);
createTable(scene, 0, 0, 1, material);

const renderPhysci = function(){
	// Hallway
	let hall_BtoC_floor1 = MeshBuilder.CreateBox('hall_B-C_floor1', { height:1,width:80,depth:160 },scene);
	hall_BtoC_floor1.position = { x:50,y:1,z:-180 }
	let hall_BtoC_floor2 = MeshBuilder.CreateBox('hall_B-C_floor2', { height:1,width:80,depth:160 },scene);
	hall_BtoC_floor2.position = { x:50,y:51,z:-180 }
	let hall_BtoC_floor3 = MeshBuilder.CreateBox('hall_B-C_floor2', { height:1,width:80,depth:160 },scene);
	hall_BtoC_floor3.position = { x:50,y:101,z:-180 }


	// WING C

	let stairs1 = MeshBuilder.CreateBox('stair-shaft', { height:150,width:40,depth:1 },scene);
	stairs1.position = { x:0,y:75,z:-300 };
	let stairs2 = MeshBuilder.CreateBox('stair-shaft', { height:150,width:1,depth:50 },scene);
	stairs2.position = { x:20,y:75,z:-325 };

	let C_floor1 = MeshBuilder.CreateBox('C-floor1',{ height:1,width:690,depth:190},scene);
	C_floor1.position = { x:-75,y:1,z:-355 };
	let C_floor2 = MeshBuilder.CreateBox('C-floor2',{ height:1,width:690,depth:190},scene);
	C_floor2.position = { x:-75,y:51,z:-355 };
	let C_floor3 = MeshBuilder.CreateBox('C-floor3',{ height:1,width:690,depth:190},scene);
	C_floor3.position = { x:-75,y:101,z:-355 };

	let C_wall_1 = MeshBuilder.CreateBox('wall1',{ height:150,width:340,depth:1 },scene);
	C_wall_1.position = {x:-190,y:75,z:-450};
	let C_wall_2 = MeshBuilder.CreateBox('wall2',{ height:150,width:340,depth:1 },scene);
	C_wall_2.position = { x:-190,y:75,z:-400 };
	let C_wall_3 = MeshBuilder.CreateBox('wall3',{ height:150,width:1,depth:50 },scene);
	C_wall_3.position = { x:-20,y:75,z:-425 };
	let C_wall_4 = MeshBuilder.CreateBox('wall4',{ height:150,width:1,depth:50 },scene);
	C_wall_4.position = { x:-50,y:75,z:-425 };
	let C_wall_5 = MeshBuilder.CreateBox('wall5',{ height:150,width:1,depth:50 },scene);
	C_wall_5.position = { x:-80,y:75,z:-425 };
	let C_wall_6 = MeshBuilder.CreateBox('wall6',{ height:150,width:1,depth:50 },scene);
	C_wall_6.position = { x:-150,y:75,z:-425 };
	let C_wall_7 = MeshBuilder.CreateBox('wall7',{ height:150,width:1,depth:50 },scene);
	C_wall_7.position = { x:-220,y:75,z:-425 };
	let C_wall_8 = MeshBuilder.CreateBox('wall8',{ height:150,width:1,depth:50 },scene);
	C_wall_8.position = { x:-290,y:75,z:-425 };
	let C_wall_9 = MeshBuilder.CreateBox('wall9',{ height:150,width:1,depth:50 },scene);
	C_wall_9.position = { x:-360,y:75,z:-425 };

	let C_wall_10 = MeshBuilder.CreateBox('wall10',{ height:150,width:400,depth:1 },scene);
	C_wall_10.position = { x:-220,y:75,z:-260 };
	let C_wall_11 = MeshBuilder.CreateBox('wall11',{ height:150,width:400,depth:1 },scene);
	C_wall_11.position = { x:-220,y:75,z:-350 };
	let C_wall_12 = MeshBuilder.CreateBox('wall12',{ height:150,width:1,depth:90 },scene);
	C_wall_12.position = { x:-20,y:75,z:-305 };
	//C-112
	let C_wall_13 = MeshBuilder.CreateBox('wall13',{ height:150,width:1,depth:90 },scene);
	C_wall_13.position = { x:-60,y:75,z:-305 };
	//C-114
	let C_wall_14 = MeshBuilder.CreateBox('wall14',{ height:150,width:1,depth:90 },scene);
	C_wall_14.position = { x:-100,y:75,z:-305 };
	//C-116
	let C_wall_15 = MeshBuilder.CreateBox('wall15',{ height:150,width:1,depth:90 },scene);
	C_wall_15.position = { x:-140,y:75,z:-305 };
	//C-118
	let C_wall_16 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_16.position = { x:-180,y:75,z:-305 };
	//C-120A
	let C_wall_17 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_17.position = { x:-220,y:75,z:-305 };
	//ICS-Lobby
	let C_wall_18 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_18.position = { x:-260,y:75,z:-305 };
	//C-120-B
	let C_wall_19 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_19.position = { x:-300,y:75,z:-305 };
	//ICS-library
	let C_wall_20 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_20.position = { x:-340,y:75,z:-305 };
	//ICS Conference Room
	let C_wall_21 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_21.position = { x:-380,y:75,z:-305 };
	let C_wall_22 = MeshBuilder.CreateBox('wall16',{ height:150,width:1,depth:90 },scene);
	C_wall_22.position = { x:-420,y:75,z:-305 };

	let C_IT_room = MeshBuilder.CreateBox('C_IR_room',{ height:150,width:180,depth:80 },scene);
	C_IT_room.position = { x:180,y:75,z:-320 }


	// PSLH A
	let PSLHA = MeshBuilder.CreateBox('PSLHA',{ height:50,width:200,depth:150},scene)
	PSLHA.position = { x:-110,y:25,z:-25 };
	// PSLH B
	let PSLHB = MeshBuilder.CreateBox('PSLHA',{ height:50,width:200,depth:150},scene)
	PSLHB.position = { x:-110,y:25,z:100 };

	let B_floor_1 = MeshBuilder.CreateBox('B-floor1',{ height:1,width:300,depth:150 },scene);
	B_floor_1.position = { x:240,y:1,z:-25 }
	let B_floor_2 = MeshBuilder.CreateBox('B-floor1',{ height:1,width:300,depth:150 },scene);
	B_floor_2.position = { x:240,y:51,z:-25 }
	let B_floor_3 = MeshBuilder.CreateBox('B-floor1',{ height:1,width:300,depth:150 },scene);
	B_floor_3.position = { x:240,y:101,z:-25 }

	let B_wall_1 = MeshBuilder.CreateBox('B_wall_1',{ height:150,width:300,depth:1 },scene);
	B_wall_1.position = { x:240,y:75,z:50 };
	let B_wall_2 = MeshBuilder.CreateBox('B_wall_2',{ height:150,width:260,depth:1 },scene);
	B_wall_2.position = { x:220,y:75,z:0 };
	let B_wall_3 = MeshBuilder.CreateBox('B_wall_3',{ height:150,width:220,depth:1 },scene);
	B_wall_3.position = { x:240,y:75,z:-50 };
	let B_wall_4 = MeshBuilder.CreateBox('B_wall_4',{ height:150,width:260,depth:1 },scene);
	B_wall_4.position = { x:220,y:75,z:-100 };
	let B_wall_5 = MeshBuilder.CreateBox('B_wall_5',{ height:150,width:1,depth: 150 }, scene);
	B_wall_5.position = { x:390,y:75,z:-25};
	let B_wall_6 = MeshBuilder.CreateBox('B_wall_6',{ height:150,width:1,depth:50})
	B_wall_6.position = { x:90,y:75,z:25 }
	let B_wall_7 = MeshBuilder.CreateBox('B_wall_7',{ height:150,width:1,depth:50})
	B_wall_7.position = { x:350,y:75,z:25 }
	let B_wall_8 = MeshBuilder.CreateBox('B_wall_8',{ height:150,width:1,depth:50})
	B_wall_8.position = { x:90,y:75,z:-75 }
	let B_wall_9 = MeshBuilder.CreateBox('B_wall_9',{ height:150,width:1,depth:50})
	B_wall_9.position = { x:130,y:75,z:-75 }
	let B_wall_10 = MeshBuilder.CreateBox('B_wall_9',{ height:150,width:1,depth:50})
	B_wall_10.position = { x:350,y:75,z:-75 }
};

renderPhysci();

let ground = Mesh.CreateGround("ground1", 1000, 1000, 2, scene);
ground.checkCollisions = true;
ground.material = new GridMaterial("grid", scene);


// Render every frame
engine.runRenderLoop(() => {
    scene.render();
});