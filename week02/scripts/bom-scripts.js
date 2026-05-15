// declare three variables that hold references to the input, button, and list elements.
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list'); //note that the ul needs to be a tag in HTML, a reference to an unordered list element. 

//<button aria-label="Close" id="close-button">❌</button>
// this is how the button should be written... but it's an html not js... and I don't want it to show unless it's attached/appeneded to an item in the list...

buttonElement.addEventListener('click', function() {
    if (inputElement.value.trim() != "") {
    
        // Create a li element that will hold each entry's chapter title and an associated delete button.
        const li = document.createElement('li');
        // We named this variable li for simplicity. The variable name does not have to match the element type being created.

        // Create a delete button.
        const deleteButton = document.createElement('button');

        // Populate the li element variable's textContent or innerHTML with the input value.
        li.textContent = inputElement.value; 
        //textContent is preferred over innerHTML because it is more secure. However, if you need to include HTML tags, use innerHTML. textContent will not render HTML tags; it will display them as plain text.
        //breaking down this line, li is the <li> lement I just created with document.createElement('li'). .textContent sets the text inside that <li> wlement created. input is the variable pointing to the <input id='favchap;> line, 1st coding line, row 4. the .value is the text the user typed into that input.

        // Set the delete button's textContent to ❌.
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function() {
            listElement.removeChild(li);
            inputElement.focus();
        });
        // Append the delete button to the li element.
        li.appendChild(deleteButton);

        // Append the li element variable to the unordered list in your HTML.
        listElement.appendChild(li);
        inputElement.value="";
    }
    input.focus();
});
