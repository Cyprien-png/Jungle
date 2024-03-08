import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export default function loadModel(gtfsPath) {
    return new Promise((resolve, reject) => {
        loader.load(
            gtfsPath,
            function (gltf) {
                resolve(gltf.scene);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('An error happened');
                reject(error);
            }
        );
    });
}