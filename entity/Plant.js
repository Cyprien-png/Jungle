import loadModel from "../tool/Loader";

export default class Plant {

    visuals = null;

    constructor(gtlfsPath) {
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
