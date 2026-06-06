// declare three variables that hold references to the input, button, and list elements.
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list'); //note that the ul needs to be a tag in HTML, a reference to an unordered list element. 

let chaptersArray = getChapterList() || []; /* the || is an OR condition so that if it's the first visit (or it's missing), it assigns an empty array. */


buttonElement.addEventListener('click', function () {
    if (inputElement.value.trim() != "") {

        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = "";
        inputElement.focus();
    }
});


chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    // Create a li element that will hold each entry's chapter title and an associated delete button.
    const li = document.createElement('li');
    // We named this variable li for simplicity. The variable name does not have to match the element type being created.

    // Create a delete button.
    const deleteButton = document.createElement('button');

    // Populate the li element variable's textContent or innerHTML with the input value.
    li.textContent = item;
    //textContent is preferred over innerHTML because it is more secure. However, if you need to include HTML tags, use innerHTML. textContent will not render HTML tags; it will display them as plain text.
    //breaking down this line, li is the <li> lement I just created with document.createElement('li'). .textContent sets the text inside that <li> wlement created. input is the variable pointing to the <input id='favchap;> line, 1st coding line, row 4. the .value is the text the user typed into that input.

    // Set the delete button's textContent to ❌.
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', function () {
        listElement.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });
    // Append the delete button to the li element.
    li.appendChild(deleteButton);

    // Append the li element variable to the unordered list in your HTML.
    listElement.appendChild(li);
    // inputElement.value = "";
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}