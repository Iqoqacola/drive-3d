import * as THREE from 'three';
import { loadLaptopModel } from './src/models/laptop';
import { loadCube } from './src/models/cube';
import { createLight } from './src/light';
import { createGround } from './src/models/ground';
import { createCamera } from './src/camera';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = null;
let cubeObject = null;
let lightObject = null;

loadCube(scene, function (cube) {
    cubeObject = cube
});

createLight(scene, function (light) {
    lightObject = light;
})

createCamera(renderer, function (cam) {
    camera = cam;
})

createGround(scene);

function animate() {

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);