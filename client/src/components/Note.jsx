import React from 'react';
import style from '../styles.css';
import trashIcon from '../public/icons/trash.png';
import pencilIcon from '../public/icons/pencil.png';

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
        {this.props.note.color}
        </div>
        <div className="note-header" >
          <div className="note-title" >
            {this.props.note.title}
          </div>
          <div className="note-header-buttons">
            <img 
              src={pencilIcon} 
              className="icons"
              onClick={() => this.props.openEditNoteModal(this.props.index) }
              /> 
            <img 
              className="btn-delete"
              src={trashIcon} 
              className="icons"
              onClick={() => this.props.openDeleteNoteModal(this.props.index) }
            /> 
          </div>
        </div>

        <div className="note-body" >
        {this.props.note.body}
        </div>
      </div>
    )
  }
}

export default Note;
