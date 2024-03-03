import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

const scene = new Scene();

const width = innerWidth;
const height = 768;

const camera = new PerspectiveCamera(70, width/height);
camera.position.set(0, 0, 4);
camera.lookAt(0, 0, 0);

const canvas = document.querySelector('canvas');
const graphic = new WebGLRenderer({canvas});

graphic.setSize(width, height);

graphic.render(scene, camera);

