import './vendor/routie.min.js'

//Reset inputField
export function emptyField() {
    document.querySelector("input").value = "";
}

//Verwijder huidige resultaten
export function deleteResults(article) {
    let listItems = document.querySelectorAll(`.${article} li`);

    listItems.forEach(listItem => {
        listItem.remove();
    })
}

export function navToggle(id) {
    const discoverNavImg = document.querySelector('.discoverNav img');
    const libraryNavImg = document.querySelector('.libraryNav img');
    const discoverNavP = document.querySelector('.discoverNav p');
    const libraryNavP = document.querySelector('.libraryNav p');

    if (id == 1) {
        discoverNavImg.src = 'static/content/icons/home_active.svg'
        libraryNavImg.src = 'static/content/icons/bookmark.svg'

        discoverNavP.classList.add("activeNav");
        libraryNavP.classList.remove("activeNav");

    } else if (id == 2) {
        discoverNavImg.src = 'static/content/icons/home.svg'
        libraryNavImg.src = 'static/content/icons/bookmark_active.svg'

        discoverNavP.classList.remove('activeNav');
        libraryNavP.classList.add('activeNav');
    }
}



const form = document.querySelector('form');
const discover = document.querySelector('.discover');
const detail = document.querySelector('.detail');
const library = document.querySelector('.library');
const search = document.querySelector('.search');

export function showDetail() {
    form.classList.add('hidden');
    discover.classList.add('hidden');
    detail.classList.remove('hidden');
    library.classList.add('hidden');
    search.classList.add('hidden');
}

export function hideDetail() {
    form.classList.remove('hidden');
    discover.classList.remove('hidden');
    detail.classList.add('hidden');
    library.classList.add('hidden');
}

export function showLibrary() {
    form.classList.add('hidden');
    discover.classList.add('hidden');
    detail.classList.add('hidden');
    library.classList.remove('hidden');
}

export function hideLibrary() {
    form.classList.remove('hidden');
    discover.classList.remove('hidden');
    detail.classList.add('hidden');
    library.classList.add('hidden');
}

export function showSearch() {
    search.classList.remove('hidden');
    discover.classList.add('hidden');
    detail.classList.add('hidden');
}

export function hideSearch() {
    search.classList.add('hidden');
}

let hash = "";

export function setHash() {
    hash = window.location.hash;
}

export function getHash() {
    return hash;
}