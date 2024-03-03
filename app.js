import { Scene, Mesh, MeshPhongMaterial, BoxGeometry } from "three";
import Camera from "./engine/Camera";
import Light from "./engine/Light";
import Graphic from "./engine/Graphic";

const scene = new Scene();

const width = innerWidth;
const height = 768;

const camera = new Camera(width, height);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshPhongMaterial();
const cube = new Mesh(geometry, material);

const light = new Light(0, 2, 1);

scene.add(cube);
scene.add(light);


const canvas = document.querySelector('canvas');
const graphic = new Graphic(scene, camera, canvas, width, height);
graphic.onUpdate(delta => {
    // Update each frame
});

