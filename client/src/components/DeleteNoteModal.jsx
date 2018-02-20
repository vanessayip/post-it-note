import React from 'react';
import style from '../styles.css'

class DeleteNoteModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    let deleteTitle = 'Delete Note';
    let deleteMessage = 'Are you should you want to delete this note?';

    if (!this.props.isDeleteNoteModalOpen) {
      return null;
    } else {
      return (
        <div className="backdrop-modal">
          <div 
            className="modal"
            style={{ 
              "borderTop": '8px solid #FBFBFB',
              "height": "30%",
              "width": "40%"
            }}
          >
            <div className="modal-title" >
            {deleteTitle}
            </div>
            <div 
              className="modal-body" 
              style={{ 
                "height": "70%"
              }}
            >
            {deleteMessage}
            </div>
            <div className="modal-footer">
              <input 
                className="btn-cancel"
                type="button" 
                value="Cancel"
                onClick={() => this.props.closeNoteModal()}
              />
              <input 
                className="btn-save"
                type="button" 
                value="Delete"
                onClick={() => {
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
