const api = "http://localhost:5000/notes";

loadNotes();

function loadNotes() {

    fetch(api)
    .then(res => res.json())
    .then(data => {

        let output = "";

        data.forEach(note => {

            output += `
            <div class="note">

                <h3>📝 ${note.title}</h3>

                <p>${note.content}</p>

                <div class="buttons">

                    <button class="editBtn"
                    onclick="editNote(${note.id})">
                    ✏ Edit
                    </button>

                    <button class="deleteBtn"
                    onclick="deleteNote(${note.id})">
                    🗑 Delete
                    </button>

                </div>

            </div>
            `;

        });

        document.getElementById("notes").innerHTML = output;

    });

}


// Save or Update Note

function saveNote() {

    const id = document.getElementById("noteId").value;

    const title = document.getElementById("title").value;

    const content = document.getElementById("content").value;

    if(title=="" || content==""){
        alert("Please fill all fields");
        return;
    }

    const note = {
        title,
        content
    };

    if(id==""){

        fetch(api,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(note)
        })
        .then(()=>{

            alert("✅ Note Added Successfully");

            clearForm();

            loadNotes();

        });

    }

    else{

        fetch(api+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(note)
        })
        .then(()=>{

            alert("✏ Note Updated Successfully");

            clearForm();

            loadNotes();

        });

    }

}



// Edit Note

function editNote(id){

    fetch(api+"/"+id)
    .then(res=>res.json())
    .then(note=>{

        document.getElementById("noteId").value = note.id;

        document.getElementById("title").value = note.title;

        document.getElementById("content").value = note.content;

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}



// Delete Note

function deleteNote(id){

    if(confirm("Are you sure you want to delete this note?")){

        fetch(api+"/"+id,{
            method:"DELETE"
        })
        .then(()=>{

            alert("🗑 Note Deleted Successfully");

            loadNotes();

        });

    }

}



// Clear Form

function clearForm(){

    document.getElementById("noteId").value="";

    document.getElementById("title").value="";

    document.getElementById("content").value="";

}