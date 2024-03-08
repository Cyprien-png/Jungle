import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
 
    constructor(width, height, position=[0,0,4], lookAt=[0,0,0]) {
        super(70, width/height);
        this.position.set(...position);
        this.lookAt(...lookAt);
    }
}