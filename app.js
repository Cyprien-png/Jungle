import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, MeshPhongMaterial, PointLight, BoxGeometry } from "three";

const scene = new Scene();

const width = innerWidth;
const height = 768;

const camera = new PerspectiveCamera(70, width/height);
camera.position.set(0, 0, 4);
camera.lookAt(0, 0, 0);


const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshPhongMaterial();
const cube = new Mesh(geometry, material);

const light = new PointLight();
light.position.set(0, 2, 1);
light.lookAt(0, 0, 0);

scene.add(cube);
scene.add(light);


const canvas = document.querySelector('canvas');
const graphic = new WebGLRenderer({canvas});

graphic.setSize(width, height);

graphic.render(scene, camera);

