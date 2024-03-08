import { Scene } from "three";
import Camera from "./engine/Camera";
import Light from "./engine/Light";
import Graphic from "./engine/Graphic";
import Plant from "./entity/Plant";


const width = innerWidth;
const height = 768;

const canvas = document.querySelector('canvas');
const scene = new Scene();
const camera = new Camera(width, height);
const light = new Light(0, 2, 1);
const plant = new Plant('./assets/plants/plam_tree.glb');


scene.add(light);
plant.show(scene)

const graphic = new Graphic(scene, camera, canvas, width, height);
graphic.onUpdate(delta => {
    // Update each frame
});
