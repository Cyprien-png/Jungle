import { Scene } from "three";
import Camera from "./engine/Camera";
import Light from "./engine/Light";
import Graphic from "./engine/Graphic";
import Plant from "./entity/Plant";


const width = innerWidth;
const height = 768;
const lookedPoint = [0, 1, -0.6];

const canvas = document.querySelector('canvas');
const scene = new Scene();
const camera = new Camera(width, height, [0, 2, 1], lookedPoint); // (0 2 1) to (0 0 2)
const light = new Light(0, 2, 1);
const plant = new Plant('./assets/plants/plam_tree.glb');


scene.add(light);
plant.show(scene)

const graphic = new Graphic(scene, camera, canvas, width, height);
graphic.onUpdate(delta => {
    // Update each frame
});

document.addEventListener("wheel", (e) => {

    const direction = e.wheelDeltaY > 0 ? 1 : -1;

    const acceleration = 2
    const baseSpeed = 0.005


    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            plant.visuals.rotateY(direction * baseSpeed);
            camera.translateY(direction * baseSpeed);
            camera.translateZ(-direction * baseSpeed);
            camera.lookAt(...lookedPoint);
        }, (i**acceleration)/10 );
    }
});
