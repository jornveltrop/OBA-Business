//Reset inputField
export function emptyField() {
    document.querySelector("input").value = "";
}

//Verwijder huidige resultaten
export function deleteResults() {
    let listItems = document.querySelectorAll(".discover li");

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