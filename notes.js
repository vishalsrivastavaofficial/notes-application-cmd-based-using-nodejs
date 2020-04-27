const fs = require('fs')

const getNotes = function() {
    return 'Here is your notes'
}
const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log('Note added successfully')
    } else {
        console.log('Duplicate Note, Kindly provide the unique title')
    }
    
}

const removeNote = function(title) {
    const notes = loadNotes()
    const noteToRemove = notes.filter(function(note) {
        return note.title === title
    })

    if(noteToRemove.length !== 0) {
        const refreshedArrayAfterRemove = notes.filter(function(note) {
            return note.title !== title
        })
        saveNotes(refreshedArrayAfterRemove)
        console.log('Note removed successfully')
    } else {
        console.log('Note not found for the given title')
    }
}

const list = function() {
    const notes = loadNotes()
    if(notes){
        notes.forEach(element => {
            console.log('Title :' + element.title + ', Body :' + element.body)
        });
    }else {
        console.log('No list found')
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function() {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }  
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    list: list
}