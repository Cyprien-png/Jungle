import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
 
    constructor(width, height) {
        super(70, width/height);
        this.position.set(0, 0, 4);
        this.lookAt(0, 0, 0);
    }
}