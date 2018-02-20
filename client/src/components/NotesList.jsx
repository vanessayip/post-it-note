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
        key={i}
        note={note}
        index={i}
        openDeleteNoteModal={this.props.openDeleteNoteModal} 
        openEditNoteModal={this.props.openEditNoteModal}
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
