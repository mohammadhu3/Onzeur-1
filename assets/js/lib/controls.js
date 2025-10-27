import { nextTrack, playPause, previousTrack } from "./audioManager.js";
import { catalogue } from "./catalogue.js";

const initControls = () => {
    console.log("initControls");
    const controls = document.getElementById("controls");


    const backwardBtn = document.createElement("i");
    backwardBtn.classList.add("fa-solid", "fa-backward-step", "playPauseBtn")
    controls.append(backwardBtn);
    backwardBtn.addEventListener("click", () => {
        previousTrack();
        statePlayBtn();
    })
    const playPauseBtn = document.createElement("i");
    playPauseBtn.classList.add("fa-solid", "fa-circle-play", "playPauseBtn");
    playPauseBtn.id = "playPauseBtn";
    controls.append(playPauseBtn);
    playPauseBtn.addEventListener("click", () => {
        playPause();
        statePlayBtn();
    })
    const forwardBtn = document.createElement("i");
    forwardBtn.classList.add("fa-solid", "fa-forward-step", "playPauseBtn")
    controls.append(forwardBtn);
    forwardBtn.addEventListener("click", () => {
        nextTrack();
        statePlayBtn();
    })
}
const statePlayBtn = () => {
    const playPauseBtn = document.getElementById("playPauseBtn");
    if (audio.paused) {
        playPauseBtn.classList.add("fa-circle-play");
        playPauseBtn.classList.remove("fa-circle-pause");
        //playPauseBtn.classList.replace("fa-circle-pause","fa-circle-play");
    } else {
        playPauseBtn.classList.remove("fa-circle-play");
        playPauseBtn.classList.add("fa-circle-pause");
        //playPauseBtn.classList.replace("fa-circle-play","fa-circle-pause");
    }
}
export { initControls,statePlayBtn }