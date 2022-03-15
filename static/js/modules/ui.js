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