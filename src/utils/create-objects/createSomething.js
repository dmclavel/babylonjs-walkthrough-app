
import { Vector2, PolygonMeshBuilder, Path2, Color3, Mesh, MeshBuilder, Vector3, DynamicTexture, StandardMaterial, Texture, Vector4, Color4, VertexData, VertexBuffer } from '@babylonjs/core';

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

export const createStar = (scene, positionX, positionY, positionZ, material) => {
    const knot = Mesh.CreateTorusKnot("mesh", 0.25, 0.1, 10, 10, 2, 5, scene);

    knot.position.x = positionX;
    knot.position.y = positionY;
    knot.position.z = positionZ;
    knot.material = material;
};

export const createChair = (scene, positionX, positionY, positionZ, material) => {
    const chairFoot1 = MeshBuilder.CreateCylinder("foot1", { diameter: 0.25, height: 2 }, scene);
    const chairFoot2 = MeshBuilder.CreateCylinder("foot2", { diameter: 0.25, height: 2 }, scene);
    const chairFoot3 = MeshBuilder.CreateCylinder("foot3", { diameter: 0.25, height: 2 }, scene);
    const chairFoot4 = MeshBuilder.CreateCylinder("foot4", { diameter: 0.25, height: 2 }, scene);
    const wood = MeshBuilder.CreateBox("", {height: 0.05, width: 2, depth: 2, updatable: true, sideOrientation: Mesh.DOUBLESIDE});

    chairFoot1.position.x = -0.2;
    chairFoot1.position.z = -1;
    chairFoot2.position.x = -0.2;
    chairFoot2.position.z = 0.5;
    chairFoot3.position.x = 0.5;
    chairFoot3.position.z = -1;
    chairFoot4.position.x = 0.5;
    chairFoot4.position.z = 0.5;
    wood.position.x = 0.15;
    wood.position.y = 1;
    wood.position.z = -0.3;

    const mergedChairMeshes = Mesh.MergeMeshes([chairFoot1, chairFoot2, chairFoot3, chairFoot4, wood]);
    mergedChairMeshes.position.x = positionX;
    mergedChairMeshes.position.y = positionY;
    mergedChairMeshes.position.z = positionZ;
    mergedChairMeshes.material = material;
    mergedChairMeshes.scaling = new Vector3(3,3,3);
};

export const createMonitor = (scene, positionX, positionY, positionZ) => {

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
    let mat = new StandardMaterial("mat", scene);
    let mat2 = new StandardMaterial("mat", scene);
    mat2.diffuseColor = new Color4(0.1,0.1,0.1, 1);
    polygon.material = mat2;
    let texture = new Texture("../images/code.png", scene);
    mat.diffuseTexture = texture;

    let faceUV = new Array(6);
    for (let i=0;i<6;i++){
        faceUV[1] = new Color4(0,0,0,0);

    }
    
    // console.log(__metadata.name)
    let screen = MeshBuilder.CreateBox("screen",{width: 8,height:0.2,depth:12, faceUV: faceUV}, scene);
    screen.position.y -=0.5+positionY;
    screen.position.z =positionZ;
    screen.position.x =positionX;

    screen.material = mat;
    let back = MeshBuilder.CreateBox("back",{width: 7,height:0.7,depth:8}, scene)
    back.position.y -= 0.9;
    back.material = mat2;
    let neck = MeshBuilder.CreateBox("neck",{width: 12,height:0.1,depth:3})
    neck.position.y-=0.9
    neck.position.x+=1
    let base = MeshBuilder.CreateBox("base",{width: 0.3, height: 5, depth: 5},scene);
    base.position.x+=7;
    // mat2.diffuseColor = new Color4(0.5,0.5,0.5, 1);
    base.material = mat2;
};

export const createCPU = (scene) => {
    let mat = new StandardMaterial("mat",scene);
    let texture = new Texture("../images/original1.png", scene);
    mat.diffuseTexture = texture;
    // mat.diffuseColor = new Color3(0,0,0);

    let faceUV = new Array(6);
    for (let i=0;i<6;i++){
        faceUV[1] = new Color4(0,0,0,0);

    }
    faceUV[0] = new Vector4(0,0,1,1);
    let cpu = MeshBuilder.CreateBox("cpu",{
        height: 5,
        width:2,
        depth:6,
        faceUV: faceUV
    }, scene);
    cpu.material = mat;
};

export const createTable = (scene, positionX, positionY, positionZ, material) => {
    const tableFoot1 = MeshBuilder.CreateCylinder("foot1", { diameter: 0.25, height: 0.8 }, scene);
    const tableFoot2 = MeshBuilder.CreateCylinder("foot2", { diameter: 0.25, height: 0.8 }, scene);
    const tableFoot3 = MeshBuilder.CreateCylinder("foot3", { diameter: 0.25, height: 0.8 }, scene);
    const tableFoot4 = MeshBuilder.CreateCylinder("foot4", { diameter: 0.25, height: 0.8 }, scene);
    const wood = MeshBuilder.CreateBox("", {height: 0.05, width: 2, depth: 2, updatable: true, sideOrientation: Mesh.DOUBLESIDE});

    tableFoot1.position.x = -0.75;
    tableFoot1.position.z = -0.5;
    tableFoot2.position.x = -0.75;
    tableFoot2.position.z = 0.5;
    tableFoot3.position.x = 0.75;
    tableFoot3.position.z = -0.5;
    tableFoot4.position.x = 0.75;
    tableFoot4.position.z = 0.5;
    wood.position.x = 0;
    wood.position.y = 0.4;
    wood.position.z = 0.1;

    const mergedChairMeshes = Mesh.MergeMeshes([tableFoot1, tableFoot2, tableFoot3, tableFoot4, wood]);
    mergedChairMeshes.position.x = positionX;
    mergedChairMeshes.position.y = positionY;
    mergedChairMeshes.position.z = positionZ;
    mergedChairMeshes.material = material;
    mergedChairMeshes.scaling = new Vector3(5, 5, 5);
};