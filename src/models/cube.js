import * as THREE from 'three';

export function loadCube(scene, onLoad) {
    const geometry = new THREE.BoxGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

    const cubeObject = new THREE.Mesh(geometry, material);

    cubeObject.rotation.set(0.2, 0.5, 0.3)
    scene.add(cubeObject);

    if (onLoad) {
        onLoad(cubeObject)
    }
}