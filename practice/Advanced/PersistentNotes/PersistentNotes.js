
const initialise = () =>{
    if(!localStorage.getItem("notes")){
        localStorage.setItem("notes",JSON.stringify([]));
    }
}

const getNotes = () => {
    try {
        const notes = JSON.parse(localStorage.getItem("notes"));
        return notes;
    } catch (error) {
        console.error("Invalid notes data in localStorage");
    }
}

const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}
const AddNote = (note) =>{
    const notes = getNotes();

    if(note.trim()===""){
        alert("please enter valid note")
        return
    }

    const newNote = {
        id: Date.now(),
        text: note,
    }

    notes.push(newNote)
    saveNotes(notes);
}

const EditNote = (id, text) => {
    if(text.trim() === ""){
        alert("Please enter valid note");
        return false;
    }

    const notes = getNotes();
    const updatedNotes = notes.map(note => 
        note.id === id ? { ...note, text: text } : note
    );

    saveNotes(updatedNotes);
    renderNotes();
    return true;
}

const OpenEditModal = (id) => {
    const notes = getNotes();
    const note = notes.find(n => n.id === id);
    
    if(!note){
        alert("Note not found");
        return;
    }

    editingNoteId = id;
    editInput.value = note.text;
    modal.classList.remove("hidden");
}

const CloseEditModal = () => {
    modal.classList.add("hidden");
    editingNoteId = null;
    editInput.value = "";
}

const DeleteNote = (id) => {
    const notes = getNotes();

    const updatedNotes = notes.filter(note => note.id !== id);

    saveNotes(updatedNotes);
    renderNotes();
}
const renderNotes = () => {
    const notes = getNotes();
    console.log("notes", notes);
    

    const notesdiv = document.getElementById("notes");

    notesdiv.innerHTML = notes.map(note => {
        return `<div class="note-card" data-id="${note.id}">
            <div>${note.text}</div>
            <div class="ed">
            <Button class="btn edit-btn">Edit</Button>
            <Button class="btn delete-btn">Delete</Button>
            </div>
        </div>`
    }).join("");
}

const btn = document.getElementById("notebtn")

btn.addEventListener("click", ()=>{
    const input = document.getElementById("inputtag")
    const noteText = input.value.trim();
    AddNote(noteText);
    input.value = "";
    renderNotes()
})

//const Delete = document.getElementsById("delete");
const notesDiv = document.getElementById("notes");
const modal = document.getElementById("edit-modal");
const editInput = document.getElementById("edit-input");
let editingNoteId = null;

notesDiv.addEventListener("click", (e=>{
    if(e.target.classList.contains("delete-btn")){
        const noteCard = e.target.closest(".note-card")
        const noteId = Number(noteCard.dataset.id);
        console.log("idd", noteId);
        
        DeleteNote(noteId);
    }
}))


notesDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-btn")){
        const noteCard = e.target.closest(".note-card");
        const noteId = Number(noteCard.dataset.id);
        OpenEditModal(noteId);
    }
});

document.getElementById("save-edit").addEventListener("click", () => {
    const updatedText = editInput.value.trim();
    const success = EditNote(editingNoteId, updatedText);
    if(success){
        CloseEditModal();
    }
});

document.getElementById("cancel-edit").addEventListener("click", () => {
    CloseEditModal();
}); 



initialise();
renderNotes();


