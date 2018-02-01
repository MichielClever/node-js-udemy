/*
var obj= {
    
  name: "Michiel"  
    
};

var stringObj= JSON.stringify(obj);
console.log(typeof(stringObj));
console.log(stringObj);
*/

/*
var personString= '{"name": "Michiel", "age": 22}';
var person = JSON.parse(personString);
console.log(typeof(person));
console.log(person);
*/

const fs= require('fs');

var originalNote= {
    
    
    title: "This is a Title",
    body: "Check my body"
    
};

//originialNoteString 
//take original note object and convert to json


var originalNoteString= JSON.stringify(originalNote);


fs.writeFileSync("notes.json", originalNoteString);


var noteString = fs.readFileSync("notes.json");


//note

var note= JSON.parse(noteString);
console.log(typeof(note));
console.log(note.title);