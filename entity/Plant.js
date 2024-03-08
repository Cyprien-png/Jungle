import { Object3D } from "three";
import loadModel from "../tool/Loader";

export default class Plant extends Object3D{

    visuals = null;

    constructor(gtlfsPath) {
        super();
        loadModel(gtlfsPath).then(gtf => {
            this.visuals = gtf;
        }).catch(error => {console.log('errr')});
    }

    show = (scene) => {
        let loop = setInterval(() => {
            if (this.visuals){
                scene.add(this.visuals);
                clearInterval(loop);
            } 
        }, 100, 1000);
    }
}
