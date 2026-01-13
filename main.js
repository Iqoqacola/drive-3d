import * as THREE from 'three';
import { loadCarModel } from './src/models/car';
import { createLight } from './src/light';
import { createGround } from './src/models/ground';
import { createCamera } from './src/camera';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let lightObject = null;
createLight(scene, function (light) {
    lightObject = light;
})

let camera = null;
createCamera(renderer, function (cam) {
    camera = cam;
})

createGround(scene);

// MODELS 3D 
let carModel = null;
loadCarModel(scene, function (model) {
    carModel = model;
})

function animate() {

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);