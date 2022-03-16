export function store() {
    // get favorites from local storage or empty array
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // // add class 'fav' to each favorite
    // favorites.forEach(function(favorite) {
    //   document.getElementById(favorite).className = 'fav';
    // });
    

    function fillToggle() {
        const bookmark = document.querySelector('.bookmarkButton');
        const bookmarkIMG = document.querySelector('.bookmarkButton img');
        const bookmarkNum = bookmark.getAttribute("num");
        if (favorites.includes(bookmarkNum)) {
            console.log('JAAAAA');
            bookmarkIMG.src = "static/content/icons/bookmark_active.svg"
        }
        else {
            bookmarkIMG.src = "static/content/icons/bookmark.svg"
        }
    }
    fillToggle();

    // register click event listener
    const bookmark = document.querySelector('.bookmarkButton');
    bookmark.addEventListener('click', function(e) {
        var id = bookmark.getAttribute("num"),
            item = e.target,
            index = favorites.indexOf(id);
    
        // return if target doesn't have an id (shouldn't happen)
        if (!id) return;

        // item is not favorite
        if (index == -1) {
            favorites.push(id);

        // item is already favorite
        } else {
            favorites.splice(index, 1);
            item.className = '';
        }

        fillToggle();

        // store array in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    // local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
}
