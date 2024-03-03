import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loaderGlb = new GLTFLoader();

export default async function loadAssets(path) {
    const glb = await loaderGlb.loadAsync(path);
    const visuals = glb.scene.children;
    // Ignore the colliders
    return visuals.filter(visual => visual.name.includes("visual"));
}