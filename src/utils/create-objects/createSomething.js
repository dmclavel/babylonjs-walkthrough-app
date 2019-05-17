import { Vector2, PolygonMeshBuilder, Path2, Color3, Mesh, MeshBuilder, Vector3, DynamicTexture, StandardMaterial, Texture, Vector4, Color4 } from '@babylonjs/core';
import { __metadata } from 'tslib';

export const createSomething = ( scene ) => {
    const  corners = [ new Vector2(4, -4),
        new Vector2(2, 0),
        new Vector2(5, 2),
        new Vector2(1, 2),
        new Vector2(-5, 5),
        new Vector2(-3, 1),
        new Vector2(-4, -4),
        new Vector2(-2, -3),
        new Vector2(2, -3),
    ];

    const  hole = [ new Vector2(1, -1),
        new Vector2(1.5, 0),
        new Vector2(1.4, 1),
        new Vector2(0.5, 1.5)
    ];

    const poly_tri = new PolygonMeshBuilder("polytri", corners, scene);
    poly_tri.addHole(hole);

    const polygon = poly_tri.build(null, 0.5);
    polygon.position.y = +4;

    const poly_path = new Path2(2,0);
    poly_path.addLineTo(5, 2);
    poly_path.addLineTo(1, 2);
    poly_path.addLineTo(-5, 5);
    poly_path.addLineTo(-3, 1);
    poly_path.addLineTo(-4, -4);
    poly_path.addArcTo(0, -2, 4, -4, 100);

    const poly_tri2 = new PolygonMeshBuilder("polytri2", poly_path, scene);
    poly_tri2.addHole(hole);

    const polygon2 = poly_tri2.build(false, 0.5);
    polygon2.position.y = -4;
};

export const createStar = (scene, positionX, positionY, material) => {
    const knot = Mesh.CreateTorusKnot("mesh", 0.25, 0.1, 10, 10, 2, 5, scene);

    knot.position.x = positionX;
    knot.position.y = positionY;
    knot.material = material;
};

export const createChair = (scene, positionX, positionY, material) => {
    const chairFoot1 = MeshBuilder.CreateCylinder("foot1", { diameter: 0.25, height: 1.5 }, scene);
    const chairFoot2 = MeshBuilder.CreateCylinder("foot2", { diameter: 0.25, height: 1.5 }, scene);
    const chairFoot3 = MeshBuilder.CreateCylinder("foot3", { diameter: 0.25, height: 1.5 }, scene);
    const chairFoot4 = MeshBuilder.CreateCylinder("foot4", { diameter: 0.25, height: 1.5 }, scene);

    chairFoot1.position.x = -0.2;
    chairFoot1.position.y = 0;
    chairFoot1.position.z = -0.5;
    chairFoot2.position.x = -0.2;
    chairFoot2.position.y = 0.4;
    chairFoot3.position.x = 0;
    chairFoot3.position.y = 0;
    chairFoot4.position.x = 0.6;
    chairFoot4.position.y = 0.4;
};

export const createMonitor = (scene) => {

    const  corners = [ 
        new Vector3(4, 6, 4),
        new Vector3(-4, 6, 4),
        new Vector3(-4, -6, 4),
        new Vector3(4, -6, 4),
    ];

    const  hole = [ 
        new Vector2(3.5, 5.5),
        new Vector2(-3.5, 5.5),
        new Vector2(-3.5, -5.5),
        new Vector2(3.5,-5.5)
    ];

    const poly_tri = new PolygonMeshBuilder("polytri", corners, scene);
    poly_tri.addHole(hole);

    const polygon = poly_tri.build(null,0.5);
    var mat = new StandardMaterial("mat", scene);
    var mat2 = new StandardMaterial("mat", scene);
    mat2.diffuseColor = new Color4(0.1,0.1,0.1, 1);
    polygon.material = mat2;
    var texture = new Texture("../images/code.png", scene);
    mat.diffuseTexture = texture;

    var faceUV = new Array(6);

    faceUV[1] = new Color4(0,0,0,0);
    
    // console.log(__metadata.name)
    var screen = MeshBuilder.CreateBox("screen",{width: 8,height:0.2,depth:12, faceUV: faceUV}, scene);
    screen.position.y -=0.5;
    screen.material = mat;
    var back = MeshBuilder.CreateBox("back",{width: 7,height:0.7,depth:8}, scene)
    back.position.y -= 0.9;
    back.material = mat2;
    var neck = MeshBuilder.CreateBox("neck",{width: 12,height:0.1,depth:3})
    neck.position.y-=0.9
    neck.position.x+=1
    var base = MeshBuilder.CreateBox("base",{width: 0.3, height: 5, depth: 5},scene);
    base.position.x+=7;
    // mat2.diffuseColor = new Color4(0.5,0.5,0.5, 1);
    base.material = mat2;
};



// show axis
export const showAxis = (size) => {
    var makeTextPlane = function(text, color, size) {
        var dynamicTexture = new DynamicTexture("DynamicTexture", 50, scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
        var plane = new Mesh.CreatePlane("TextPlane", size, scene, true);
        plane.material = new StandardMaterial("TextPlaneMaterial", scene);
        plane.material.backFaceCulling = false;
        plane.material.specularColor = new Color3(0, 0, 0);
        plane.material.diffuseTexture = dynamicTexture;
        return plane;
    };

    var axisX = Mesh.CreateLines("axisX", [ 
        new Vector3.Zero(), new Vector3(size, 0, 0), new Vector3(size * 0.95, 0.05 * size, 0), 
        new Vector3(size, 0, 0), new Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
    axisX.color = new Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = Mesh.CreateLines("axisY", [
    new Vector3.Zero(), new Vector3(0, size, 0), new Vector3( -0.05 * size, size * 0.95, 0), 
    new Vector3(0, size, 0), new Vector3( 0.05 * size, size * 0.95, 0)
    ], scene);
    axisY.color = new Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = Mesh.CreateLines("axisZ", [
    new Vector3.Zero(), new Vector3(0, 0, size), new Vector3( 0 , -0.05 * size, size * 0.95),
    new Vector3(0, 0, size), new Vector3( 0, 0.05 * size, size * 0.95)
    ], scene);
    axisZ.color = new Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new Vector3(0, 0.05 * size, 0.9 * size);

};