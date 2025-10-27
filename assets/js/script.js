import { initAudioManager } from "./lib/audioManager.js";
import { initControls } from "./lib/controls.js";
import { catalogue } from "./lib/catalogue.js";
import { initDiapo } from "./lib/diaporama.js";
import { initMenuPlaylist } from "./lib/menuPlaylist.js";

globalThis.currentTrack = 0;
globalThis.catalogueLength = catalogue.length;
globalThis.audio = initAudioManager(catalogue[currentTrack].audio);
initControls();
initDiapo();
initMenuPlaylist();