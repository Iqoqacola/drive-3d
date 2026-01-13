import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createCamera(renderer, onLoad) {
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 50;


    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    + camera.position.set(0, 5, 12)

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    // controls.minDistance = 10;
    controls.maxDistance = 20;
    controls.update();

    if (onLoad) {
        onLoad(camera)
    }


}