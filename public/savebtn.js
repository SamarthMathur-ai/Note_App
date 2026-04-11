
const savebtn = document.querySelector("#savebtn");

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
            time : new Date()
        };
        console.log(update);

        await fetch('/save', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(update)       
        })
        
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