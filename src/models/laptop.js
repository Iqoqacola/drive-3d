import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export function loadLaptopModel(scene, onLoad) {
    loader.load("/Laptop.glb", function (gltf) {
        gltf.scene.scale.set(0.01, 0.01, 0.01);
        gltf.scene.rotation.set(0.2, 0.5, 0)

        scene.add(gltf.scene);

        if (onLoad) {
            onLoad(gltf.scene)
        }

    }, undefined, function (error) {
        console.error(error);
    })
}
