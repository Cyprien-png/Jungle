import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

const scene = new Scene();

const camera = new PerspectiveCamera(70, innerWidth/innerHeight);
camera.position.set(0, 0, 4);
camera.lookAt(0, 0, 0);

const canvas = document.querySelector('canvas');
const graphic = new WebGLRenderer({canvas});
graphic.render(scene, camera);

