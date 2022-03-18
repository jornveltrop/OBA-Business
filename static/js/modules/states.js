import { hideAll } from "./ui.js";

const loader = document.querySelector(".loader");

// ******* //
// LOADING //
// ******* //

//Start loading animatie
export function setLoading() {
    loader.classList.add("loaderDisplay");
    hideAll();
}

//Stop loading animatie
export function stopLoading() {
    loader.classList.remove("loaderDisplay");
}