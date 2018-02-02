const fs= require("fs");


var fetchNotes= () =>{
    try{
       
        var noteString=fs.readFileSync("notes-data.json");
        return JSON.parse(noteString);
        
    }catch(e){
        
        return [];
    }
    
};

var saveNotes=(notes) =>{
   fs.writeFileSync("notes-data.json", JSON.stringify(notes)); 
};

var addNote= (title, body) =>{
    
    var notes= fetchNotes();
    var note = {
        
        title,
        body
    
    };
    
    var duplicateNotes= notes.filter((note)=> note.title === title);
    if (duplicateNotes.length ==0){
        
        notes.push(note);
        saveNotes(notes);
        return note;
        //console.log("Adding note", title, body);
        
    }
   
    
};

var getAll = () =>{
    return fetchNotes();
    c
    
    
};

var getNote= (title) =>{
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
    
};


var removeNote= (title) =>{
  
    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title !== title);
    saveNotes(filteredNotes);
    
    return notes.length !== filteredNotes.length
        
    
    
};

var logNote= (note) => {
    //Break on this line and use repl to output node
    debugger;
    //use read command with --title
    
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports={
    
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
    
};


/*module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};*/

/*module.exports.add = (a, b) => {
  return a + b;
};*/