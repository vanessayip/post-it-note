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
            note color picker
            </div>
            <div className="modal-header" >
            note header with color
            </div>
            <div className="modal-title" >
              note title
            </div>
            <div className="modal-body" >
            hi from add modal
            </div>
            <div className="modal-footer">
              <input 
                id="btn-cancel"
                type="button" 
                value="Cancel"
                onClick={() => this.props.closeDeleteNoteModal()}
              />
              <input 
                id="btn-save"
                type="button" 
                value="Save"
                onClick={() => {
                  this.props.deleteNote();
                  this.props.closeDeleteNoteModal();
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
