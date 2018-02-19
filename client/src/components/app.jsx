import React from 'react';
import style from '../styles.css';
import Header from './Header.jsx';
import NotesList from './NotesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      view: 'home',
      notes: [{
        title: 'Welcome!',
        body: 'Try out this post-it app',
        color: 'rgb(250, 169, 176)',
      }, {
        title: 'Welcome!',
        body: 'Try out this post-it app',
        color: 'rgb(250, 169, 176)',
      }],
      noteColor: '',
      noteTitle: '',
      noteBody: '',
      noteIndexToModify: null,
      isAddNoteModalOpen: false,
      isEditNoteModalOpen: false,
      isDeleteNoteModalOpen: false,
    }
    this.addNote = this.addNote.bind(this);
    this.openAddNoteModal = this.openAddNoteModal.bind(this);
    this.closeAddNoteModal = this.closeAddNoteModal.bind(this);

    this.deleteNote = this.deleteNote.bind(this);
    this.openDeleteNoteModal = this.openDeleteNoteModal.bind(this);
    this.closeDeleteNoteModal = this.closeDeleteNoteModal.bind(this);
  }

  //i: noteindex
  //show modal with message to confirm
  //onclick confirm, remove note from list of notes
  //onclick cancel, do nothing and close modal
  deleteNote(noteIndex) {
    const updatedNotes = this.state.notes;
    updatedNotes.splice(noteIndex, 1);

    this.setState({
      notes: updatedNotes,
    });
  }

  openDeleteNoteModal() {
    this.setState({ isDeleteNoteModalOpen: true })
  }

  closeDeleteNoteModal() {
    this.setState({ isDeleteNoteModalOpen: false })
  }

  openAddNoteModal() {
    this.setState({ isAddNoteModalOpen: true })
  }

  closeAddNoteModal() {
    this.setState({ isAddNoteModalOpen: false })
  }

  addNote() {
    const newNote = {
      color: 'rgb(250, 169, 176)',
      title: '(add a title)',
      body: '(add a note)',
    };

    this.setState({
      notes: [...this.state.notes, newNote],
    });
  }

  render () {
    return (
      <div id="page" >
        <Header 
          addNote={this.addNote} 
          isAddNoteModalOpen={this.state.isAddNoteModalOpen} 
          openAddNoteModal={this.openAddNoteModal}
          closeAddNoteModal={this.closeAddNoteModal}
          />
        <NotesList 
          notes={this.state.notes} 
          deleteNote={this.deleteNote} 
          isDeleteNoteModalOpen={this.state.isDeleteNoteModalOpen} 
          openDeleteNoteModal={this.openDeleteNoteModal}
          closeDeleteNoteModal={this.closeDeleteNoteModal}
          />
      </div>
    )
  }
}

export default App;
