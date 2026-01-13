import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export function loadCarModel(scene, onLoad) {
    loader.load("/assets/models/Car.glb", function (gltf) {
        const car = gltf.scene
        const box = new THREE.Box3().setFromObject(car);
        const center = box.getCenter(new THREE.Vector3());

        car.position.x -= center.x;
        car.position.z -= center.z;
        car.position.y -= box.min.y;

        scene.add(car);

        if (onLoad) {
            onLoad(car)
        }

    }, undefined, function (error) {
        console.error(error);
    })
}

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// const loader = new GLTFLoader();

// export function loadCarModel(scene, onLoad) {
//     loader.load("/assets/models/Car.glb", function (gltf) {
//         const car = gltf.scene;

//         // normalisasi dasar
//         car.position.set(0, 0, 0);

//         // hitung bounding box
//         const box = new THREE.Box3().setFromObject(car);

//         // geser supaya bagian terbawah mobil tepat di Y = 0 (ground)
//         car.position.y -= box.min.y;

//         scene.add(car);

//         if (onLoad) {
//             onLoad(car);
//         }

//     }, undefined, function (error) {
//         console.error(error);
//     });
// }
