const initAudioManager = (url) => {
    console.log("initAudioManager");
    const audio = new Audio("./assets/audio/" + url)
    return audio
}
const playPause = () => {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
}
const nextTrack = (url) => {
    if(currentTrack === catalogueLength -1){
        currentTrack = 0;
    } else {
        currentTrack++;
    }
    console.log(currentTrack);
    audio.pause();
    audio.src = "./assets/audio/" + url;
    audio.play();
}
const previousTrack = (url) => {
    if(currentTrack === 0){
        currentTrack = catalogueLength -1;
    } else {
        currentTrack--;
    }
    console.log(currentTrack);
    audio.pause();
    audio.src = "./assets/audio/" + url;
    audio.play();
}
export { initAudioManager, playPause, nextTrack, previousTrack }