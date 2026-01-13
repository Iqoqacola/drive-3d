import * as THREE from 'three';

export function createLight(scene, onLoad) {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();

    scene.add(light);

    if (onLoad) {
        onLoad(light)
    }

}
