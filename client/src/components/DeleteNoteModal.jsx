import React from 'react';
import style from '../styles.css'

class DeleteNoteModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    if (!this.props.isDeleteNoteModalOpen) {
      return null;
    } else {
      return (
        <div className="backdrop-modal">
          <div className="modal">
            <div className="modal-color" >
            color should be white
            </div>
            <div className="modal-header" >
            note header with color
            </div>
            <div className="modal-title" >
              Delete Note
            </div>
            <div className="modal-body" >
            Are you should you want to delete this note?
            </div>
            <div className="modal-footer">
              <input 
                id="btn-cancel"
                type="button" 
                value="Cancel"
                onClick={() => this.props.closeNoteModal()}
              />
              <input 
                id="btn-delete"
                type="button" 
                value="Delete"
                onClick={() => {
                  // alert(this.props.index)
                  this.props.deleteNote(this.props.index);
                  this.props.closeNoteModal();
                  }
                }
              />
            </div>
          </div>
        </div>
      )
      
    }
  }
}

export default DeleteNoteModal;
