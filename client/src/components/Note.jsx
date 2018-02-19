import React from 'react';
import style from '../styles.css';
import trashIcon from '../public/icons/trash.png';
import pencilIcon from '../public/icons/pencil.png';
import DeleteNoteModal from './DeleteNoteModal.jsx'

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
    }
  }


  render () {
    return (
      <div class="post-it" >
        <div class="note-color" >
        note color picker
        </div>
        <div class="note-header" >
        note header with color
          <div class="note-title" >
            note title
          </div>
          <div class="note-header-buttons">
            <img src={pencilIcon} class="icons"/> 
            <img 
              class="btn-delete"
              src={trashIcon} 
              class="icons"
              onClick={() => this.props.openDeleteNoteModal()}
            /> 
            <DeleteNoteModal 
              isDeleteNoteModalOpen={this.props.isDeleteNoteModalOpen}
              deleteNote={this.props.deleteNote}
              closeDeleteNoteModal={() => this.props.closeDeleteNoteModal()}
            />
          </div>
        </div>

        <div class="note-body" >
        note body
        </div>
      </div>
    )
  }
}

export default Note;
