import React from 'react';
import style from '../styles.css';
import trashIcon from '../public/icons/trash.svg';
import pencilIcon from '../public/icons/pencil.svg';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div 
        className="post-it"
        style={{ "borderTop": '8px solid #' + this.props.note.color }}
      >
        <div className="note-header" >
          <div className="note-title" >
            {this.props.note.title}
          </div>
          <div className="note-header-buttons">
            <img 
              className="icons"
              src={pencilIcon} 
              onClick={() => this.props.openEditNoteModal(this.props.index) }
              /> 
            <img 
              className="icons"
              src={trashIcon} 
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
