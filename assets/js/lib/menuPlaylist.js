import { playFormPlaylist } from "./audioManager.js";
import { catalogue } from "./catalogue.js";
import { statePlayBtn } from "./controls.js";
const displaySubmenu = (value, li, i) => {
  console.log(value);
  const submenu = document.createElement("div");
  // innerHTML a titre exceptionnel pas une bonne pratique
  /* submenu.innerHTML = `<p>${value.titre}</p>
    <p>${value.artiste}</p>
     <p>${value.album}</p>
     <p>${value.annee}</p>
    `; */
  const subMenuValues = ["titre", "album", "artiste", "annee"];
  const icones = ["🎙️", "🪕", "🪗", "🪇"];
  // une boucle while pour executer les 4 instructions
  // suivantes sur mon tableau subMenuValues
  // avant d'ecrir while
  // 1er etape d'une boucle while c'est de declarer un
  // entier variable
  /* let i = 0;
    while (i < subMenuValues.length) {
        console.log("hello");
        const p  = document.createElement('p');
        p.textContent = value[subMenuValues[i]];
        p.classList.add("inner-submenu");
        submenu.append(p);
        // l'incrementation est OBLIGATOIRE et appelée en fin
        // d'instructions de boucles
        i++;
    } */
  for (let i = 0; i < subMenuValues.length; i++) {
    const p = document.createElement("p");
    p.textContent = value[subMenuValues[i]];
    p.classList.add("inner-submenu");
    submenu.append(p);
    const span = document.createElement("span");
    span.textContent = icones[i];
    p.prepend(span);
  }
  // ( value[subMenuValues[0]] => value.titre ,etc.)
  /* const titre = document.createElement('p');
    titre.textContent = value.titre;
    titre.classList.add("inner-submenu");
    submenu.append(titre); */
  submenu.id = "submenu" + i;
  submenu.classList.add("submenu");
  li.append(submenu);
};
const createSubMenu = (value, li, i) => {
  li.addEventListener("click", () => {
    catalogue.forEach((value, index) => {
      if (document.contains(document.getElementById("submenu" + index))) {
        document.getElementById("submenu" + index).remove();
      } else {
        if (index === i) {
          displaySubmenu(value, li, i);
          currentTrack = i;
          // url = catalogue[i].audio
          playFormPlaylist(catalogue[i].audio)
          statePlayBtn();
        }
      }
    });
  });
};
const initMenuPlaylist = () => {
  console.log("initMenuPlaylist");
  const playlist = document.getElementById("playlist");
  const ul = document.createElement("ul");
  playlist.append(ul);
  // inserer dans ce ul autant de li qu'il y a de titre dans mon catalogue
  catalogue.forEach((value, index) => {
    console.log(value.titre);
    const li = document.createElement("li");
    li.textContent = value.titre;
    li.classList.add("entree-menu");
    ul.append(li);
    //fonction affichage/masquage du sous menu
    createSubMenu(value, li, index);
  });
};

export { initMenuPlaylist };
