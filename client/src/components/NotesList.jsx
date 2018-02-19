import React from 'react';
import style from '../styles.css'
import Note from './Note.jsx';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    let notes = this.props.notes.map((note, i) => 
      <Note
        openDeleteNoteModal={this.props.openDeleteNoteModal} 
        isDeleteNoteModalOpen={this.props.isDeleteNoteModalOpen}
        deleteNote={this.props.deleteNote}
        onClose={() => this.props.closeDeleteNoteModal()}
        />
      );
    return (
      <div id="content-area">
      {notes}
      </div>
    )
  }
}

export default NotesList;
