import { WebGLRenderer, Clock } from "three";

export default class Graphic extends WebGLRenderer {

    scene = null;
    clock = null;
    camera = null;
    cbUpdate = null;
    cbLoop = null;

    constructor(scene, camera, canvas, width, height) {
        super({canvas});
        this.clock = new Clock();
        this.scene = scene;
        this.camera = camera;
        this.setSize(width, height);
        this.cbLoop = this.loop.bind(this);
        this.shadowMap.enabled = true;
        this.loop();
    }

    loop() {
        const delta = this.clock.getDelta();
        if(this.cbUpdate) this.cbUpdate();
        this.render(this.scene, this.camera);
        requestAnimationFrame(this.cbLoop);
    }

    onUpdate(callback) {
        this.cbUpdate = callback;
    }
}

