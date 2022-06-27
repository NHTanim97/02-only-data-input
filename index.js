
// Constructor
/*
    1st এই টুকো করতে হবে Constructor part;
*/
function Book(uName, uAuthor, uType){
    this.name =  uName;
    this.author = uAuthor;
    this.type = uType;
}






// Display Constructor
function Display(){

}






// Add methods to display prototype
/*
    3rd এই টুকো করতে হবে display prototype part;
*/
Display.prototype.add = function(book){ // call submit btn display object
    console.log('adding ui')
    // call table body tempale leti
    tableBody = document.getElementById('tableBody');
    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
     tableBody.innerHTML += uiString;
}

// ----
Display.prototype.clear =  function(){ // call submit btn display object
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}







// Add submit event listener to libraryForm
/*
    2st এই টুকো করতে হবে submit event listener part;
*/
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('this is submit');

    // ---from
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    // let type;

    // ---type
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    let type;
    if (fiction.checked){
        type = fiction.value;
    }
    else if (programming.checked){
        type = programming.value;
    }
    else if (cooking.value){
        type = cooking.value;
    }


    let book =  new Book(name, author, type);
    console.log(book);


    // ---show display from display constructor 
    let display = new Display();
    display.add(book);
    display.clear(); //submit data and celar the submit form and type new data;

    e.preventDefault()
}