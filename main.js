import * as THREE from 'three';
import { loadLaptopModel } from './src/models/laptop';
import { loadCube } from './src/models/cube';
import { createLigth } from './src/light';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let laptopObject = null;
let cubeObject = null;
let lightObject = null;

// const geometry = new THREE.BoxGeometry(100, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

// const Tanah = new THREE.Mesh(geometry, material);
// Tanah.rotation.x = - Math.PI / 2;

loadCube(scene, function (cube) {
    cubeObject = cube
});

createLigth(scene, function (light) {
    lightObject = light;
})

scene.add(light);


function animate() {

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);