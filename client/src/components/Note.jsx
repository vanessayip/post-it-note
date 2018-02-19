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
      <div className="post-it" >
        <div className="note-color" >
        note color picker
        </div>
        <div className="note-header" >
        note header with color
          <div className="note-title" >
            note title
          </div>
          <div className="note-header-buttons">
            <img src={pencilIcon} className="icons"/> 
            <img 
              className="btn-delete"
              src={trashIcon} 
              className="icons"
              onClick={() => this.props.openDeleteNoteModal()}
            /> 
            <DeleteNoteModal 
              isDeleteNoteModalOpen={this.props.isDeleteNoteModalOpen}
              deleteNote={this.props.deleteNote}
              closeDeleteNoteModal={() => this.props.closeDeleteNoteModal()}
            />
          </div>
        </div>

        <div className="note-body" >
        note body
        </div>
      </div>
    )
  }
}

export default Note;
