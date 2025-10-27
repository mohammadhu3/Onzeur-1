import { nextTrack, previousTrack } from "./audioManager.js";
import { catalogue} from "./catalogue.js";
import {statePlayBtn } from "./controls.js"

const initDiapo = () => {
    console.log("initDiapo");
   

    const diapo = document.getElementById("diapo");
    const imgDiapo = document.querySelector("#diapo>img");
    imgDiapo.src="./assets/img/cover/"+catalogue[currentTrack].cover;

    let mvtCss = "";
    let scale = 100;
    let scaleMax = 150;
    const mc2 = new Hammer.Manager(diapo);
    const pinch = new Hammer.Pinch(); 
    mc2.add(pinch);
    mc2.on("pinch",(event)=>{
        //console.log(event);
        if(event.additionalEvent === "pinchout"){
            if(scale<scaleMax){
                scale += 1;
            }
        } else if (event.additionalEvent === "pinchin"){
            if(scale > 100){
                scale -= 1;
            }
        }
        console.log(scale);
        imgDiapo.style.transform = `scale(${scale}%)`
    })
    const mc = new Hammer(diapo); 
    mc.on('swipeleft swiperight pinch', (event) => {
        console.log(event);
        // une premiere condition pour detecter le geste de mon user
        if (event.type === "swipeleft") {
            mvtCss = "moveleft";
            // une seconde position pour gerer le currentTrack qui
            // va gerer le src de mon image à venir
            previousTrack();
            statePlayBtn();

        } else if (event.type === "swiperight") {
            mvtCss = "moveright";
            // a l'inverse
            // url > gerer par 
          nextTrack();
        }

        imgDiapo.src="./assets/img/cover/"+catalogue[currentTrack].cover;

    })
}
export { initDiapo }