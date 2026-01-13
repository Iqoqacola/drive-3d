import * as THREE from 'three';

const planeSize = 40;

const loader = new THREE.TextureLoader();
const texture = loader.load('https://threejs.org/manual/examples/resources/images/checker.png');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.magFilter = THREE.NearestFilter;
texture.colorSpace = THREE.SRGBColorSpace;
const repeats = planeSize / 2;
texture.repeat.set(repeats, repeats);

export function createGround(scene, onLoad) {
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize);
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = - Math.PI / 2;
    plane.position.y = -2;
    scene.add(plane);
    if (onLoad) {
        onLoad(plane)
    }
}