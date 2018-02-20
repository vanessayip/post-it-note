import React from 'react';
import style from '../styles.css';
import Header from './Header.jsx';
import NotesList from './NotesList.jsx';
import AddNoteModal from './AddNoteModal.jsx'
import DeleteNoteModal from './DeleteNoteModal.jsx';
import EditNoteModal from './EditNoteModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        title: 'Welcome!',
        body: 'Add some stuff!',
        color: 'FAA9B0',
      }],
      noteIndexToModify: null,
      isAddNoteModalOpen: false,
      isEditNoteModalOpen: false,
      isDeleteNoteModalOpen: false,
    }
    this.addNote = this.addNote.bind(this);
    this.openAddNoteModal = this.openAddNoteModal.bind(this);

    this.deleteNote = this.deleteNote.bind(this);
    this.openDeleteNoteModal = this.openDeleteNoteModal.bind(this);

    this.editNote = this.editNote.bind(this);
    this.openEditNoteModal = this.openEditNoteModal.bind(this);
    
    this.closeNoteModal = this.closeNoteModal.bind(this);
  }

  openDeleteNoteModal(index) {
    this.setState({ 
      isDeleteNoteModalOpen: true,
      noteIndexToModify: index
     })
  }

  closeNoteModal() {
    this.setState({ 
      isAddNoteModalOpen: false,
      isDeleteNoteModalOpen: false,
      isEditNoteModalOpen: false,
      noteIndexToModify: null
    })
  }

  deleteNote(index) {
    // console.log(noteIndex)
    const updatedNotes = this.state.notes;
    updatedNotes.splice(index, 1);

    this.setState({
      notes: updatedNotes,
    });
  }

  openAddNoteModal() {
    this.setState({ isAddNoteModalOpen: true })
  }

  addNote(color, title, body) {
    const newNote = {
      color: color,
      title: title,
      body: body,
    };

    this.setState({
      notes: [...this.state.notes, newNote],
    });
  }

  openEditNoteModal(index) {
    this.setState({ 
      isEditNoteModalOpen: true,
      noteIndexToModify: index
     });
  }

  editNote(noteIndex, color, title, body) {
    const updatedNote = {
      color: color,
      title: title,
      body: body,
    };
    
    let notes = this.state.notes.slice(0, noteIndex);
    notes.push(updatedNote);
    notes = notes.concat(this.state.notes.slice(noteIndex + 1));
    
    this.setState({
      notes: notes,
    });
  }

  render () {

    return (
      <div>
        <Header 
          addNote={this.addNote} 
          isAddNoteModalOpen={this.state.isAddNoteModalOpen} 
          openAddNoteModal={this.openAddNoteModal}
          closeNoteModal={this.closeNoteModal}
          />
        <NotesList 
          notes={this.state.notes} 
          openDeleteNoteModal={this.openDeleteNoteModal}
          openEditNoteModal={this.openEditNoteModal}
          closeNoteModal={this.closeNoteModal}
          />
        <AddNoteModal 
          isAddNoteModalOpen={this.state.isAddNoteModalOpen}
          addNote={this.addNote}
          closeNoteModal={this.closeNoteModal}
        />
        { this.state.isEditNoteModalOpen ? (<EditNoteModal
          index={this.state.noteIndexToModify}
          note={this.state.notes[this.state.noteIndexToModify]}
          isEditNoteModalOpen={this.state.isEditNoteModalOpen}
          editNote={this.editNote}
          closeNoteModal={this.closeNoteModal}
        />) : null }
        <DeleteNoteModal 
          index={this.state.noteIndexToModify}
          isDeleteNoteModalOpen={this.state.isDeleteNoteModalOpen}
          deleteNote={this.deleteNote}
          closeNoteModal={this.closeNoteModal}
        />  
      </div>
    )
  }
}

export default App;
