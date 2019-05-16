import { Vector2, PolygonMeshBuilder, Path2, Color3, Mesh, MeshBuilder } from '@babylonjs/core';

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