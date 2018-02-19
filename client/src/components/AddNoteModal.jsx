import React from 'react';
import style from '../styles.css'

class AddNoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      title: '',
      body: '',
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  render () {
    if (!this.props.isAddNoteModalOpen) {
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
            <input 
                  type="text"
                  value={this.state.title}
                  class="modal-title"
                  placeholder="Untitled"
                  onChange={this.handleTitleChange} 
                />
            <form>
            <div class="modal-title" >
              note title
            </div>
            <div class="modal-body" >
            hi from add modal
            </div>
            </form>
            <div class="modal-footer">
              <input 
                id="btn-cancel"
                type="button" 
                value="Cancel"
                onClick={() => this.props.closeAddNoteModal()}
              />
              <input 
                id="btn-save"
                type="button" 
                value="Save"
                onClick={() => {
                  this.props.addNote();
                  this.props.closeAddNoteModal();
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

export default AddNoteModal;
