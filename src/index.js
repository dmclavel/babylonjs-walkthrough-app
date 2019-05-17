import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

import { GridMaterial } from "@babylonjs/materials/grid";
// import { buildFromPlan } from './utils/house-builder/buildFromPlan';
import { createSomething, createChair, createStar, createMonitor } from './utils/create-objects/createSomething';

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";


const earcut = require('earcut');
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

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
let light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.9;

// Create a grid material
let material = new GridMaterial("grid", scene);

createMonitor(scene);

// createStar(scene, 2, 2, material);
// createStar(scene, 0, 2, material);
// createStar(scene, 4, 2, material);
// createChair(scene);
// showAxis(1);

// Our built-in 'sphere' shape. Params: name, subdivs, size, scene
// let sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);

// Move the sphere upward 1/2 its height
// sphere.position.y = -5;

// Affect a material
// sphere.material = material;

// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
// let ground = Mesh.CreateGround("ground1", 6, 6, 2, scene);

// Affect a material
// ground.material = material;

// Render every frame
engine.runRenderLoop(() => {
    scene.render();
});