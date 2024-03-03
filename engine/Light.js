import { PointLight } from "three";

export default class Light extends PointLight {

    constructor(x, y, z) {
        super();
        this.position.set(x, y, z);
        this.lookAt(0, 0, 0);
    }
}