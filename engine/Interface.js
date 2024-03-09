export default class Interface {

    static acceleration = 2
    static baseSpeed = 0.005

    static scroll(e, plant, camera, lookedPoint) {
        const direction = e.wheelDeltaY > 0 ? 1 : -1;

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                plant.visuals.rotateY(direction * this.baseSpeed);
                camera.translateY(direction * this.baseSpeed);
                camera.translateZ(-direction * this.baseSpeed / 2);
                camera.lookAt(...lookedPoint);
            }, (i ** this.acceleration) / 10);
        }
    }
}
