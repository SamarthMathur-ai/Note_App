
const savebtn = document.querySelector("#savebtn");
const newbtn = document.querySelector("#newbtn");
const deletebtn = document.querySelector("#deletebtn");
let currId = null;

const saveBtnFunc = async()=>{
    const proceed = confirm("Do you want to overwrite your previously saved file.");
    if(proceed) {
        const head = document.querySelector("#head");
        const note = document.querySelector("#note");

        console.log("Head content", head.value);
        console.log("note content", note.value);
        const update = {
            title : head.value,
            content : note.value,
            id : currId
        };
        console.log(update);
        

        const response = await fetch('/save', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(update)       
        })
        const result = await response.json();

        currId = result.id;
        
    }

    /**
     * USER CONFIRMATION:
     * - confirm() creates a modal that returns a Boolean (true/false).
     * - We wrap our logic in an 'if' statement so it only runs if the user clicks 'OK'.
     */
    
    /**
     * DOM SELECTION & DATA CAPTURE:
     * - querySelector grabs the HTML element.
     * - IMPORTANT: To get the text the user typed, you must access the '.value' 
     * property of the element, not just the element variable itself.
     */

    /**
     * OBJECT CONSTRUCTION:
     * - We bundle the title, content, and a new Date() into a single object.
     * - This keeps our data organized before we "wrap" it for the server.
     */

    /**
     * THE FETCH OPERATION (The "Shipping" process):
     * - 'await' pauses the code here until the server sends a response.
     * - '/save' is the URL endpoint we defined in our router file.
     * * FETCH SETTINGS:
     * 1. method: Set to 'POST' because we are sending/storing data.
     * 2. headers: Must be { 'Content-Type': 'application/json' } so the 
     * backend knows how to parse the incoming package.
     * 3. body: We use JSON.stringify(object) to convert our JS object into 
     * a string format that can travel across the internet.
     */
}

savebtn.addEventListener('click', saveBtnFunc);



/// OPEN BUTTON
window.onButton = async(id) => {
    const response = await fetch(`/getNote/${id}`);
    const result = await response.json();
    currId = result.id;
    const head = document.querySelector("#head");
    const note = document.querySelector("#note");
    head.value = result.title;
    note.value = result.content;
    note.readOnly = false;
}


const newNoteFunc = () => {
    const proceed = confirm("Do you want to start a new note");
    if(proceed) {
        currId = null;
        const head = document.querySelector("#head");
        const note = document.querySelector("#note");
        head.value = "";
        note.value = "";
        note.readOnly = true;
    } 
}


newbtn.addEventListener('click',newNoteFunc);

const deleteBtnFunc = async() => {
    const proceed = confirm("Are you sure you want to delete this note?");
    if(proceed) {
        // if the function is saved already in the json file then we have to delete it 
        if(currId != null) {
            const response = await fetch(`/delete/${currId}`,{
                method : 'DELETE'
            });
        }
        currId = null;
        const head = document.querySelector("#head");
        const note = document.querySelector("#note");
        head.value = "";
        note.value = "";
        note.readOnly = true;
    }
}

deletebtn.addEventListener('click',deleteBtnFunc);