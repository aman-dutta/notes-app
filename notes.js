const fs = require('fs');
const chalk = require('chalk');


const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!!"));
    }else{
        console.log(chalk.red.inverse("The title is already taken!"));
    }
}


const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('The note has been removed'));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse('There is no such notes!'));
    }
}

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes:"))
    
    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title === title );

    if(readNote){
        console.log(chalk.bgRed.bold(readNote.title));
        console.log(readNote.body);
    }else{
        console.log(chalk.red.inverse('Oops! No notes named given title.'));
    }
}

const saveNotes =  (notes) =>  {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>  {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}