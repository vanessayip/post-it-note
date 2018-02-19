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
        <div class="backdrop-modal">
          <div class="modal">
            <div class="modal-color" >
            note color picker
            </div>
            <div class="modal-header" >
            note header with color
            </div>
            <div class="modal-title" >
              note title
            </div>
            <div class="modal-body" >
            hi from add modal
            </div>
            <div class="modal-footer">
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
