console.log('welcome to App.js and this is a notes app')
console.log(ShowNotes);
ShowNotes();
//if user adds a notes add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj);
    ShowNotes();
})
function ShowNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `      <div class="my-2 mx-2card" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text"> ${element}</p>

          <button id="${index}" onClick='deleteNote(this.id)'  class="btn btn-primary">Delete note</button>
        </div>
      </div>`;

    });
    let notesELm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesELm.innerHTML = html;
    }
    else {
        notesELm.innerHTML = `Nothing to show use "Add notes" above the add note section`;
    }

}
//funnction to delete a note
function deleteNote(index){
    console.log('i am deleting', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    ShowNotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal=search.value;
    console.log('input event fired',inputVal);
    // let inputVal=search.value;
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display='block';      
         }
         else{
             element.style.display='none';
         }
    })
})