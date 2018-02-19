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
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(event) {
    console.log(event.target)
    this.setState({title: event.target.value});
  }

  handleColorChange(event) {
    let selectedColor = event.target.id.split('btn-');
    // console.log(selectedColor[1]);
    this.setState({color: selectedColor[1]});
  }

  handleBodyChange(event) {
    console.log(event.target)
    this.setState({body: event.target.value});
  }

  render () {
    if (!this.props.isAddNoteModalOpen) {
      return null;
    } else {
      return (
        <div className="backdrop-modal">
          <div className="modal">
            <div className="modal-color" >
              <input 
                id="btn-pink"
                type="button" 
                value=" "
                onClick={this.handleColorChange}
              />
              <input 
                id="btn-blue"
                type="button" 
                value=" "
                onClick={this.handleColorChange}
              />
            </div>
            <div className="modal-header" >
            note header with color
            </div>
            <input 
              type="text"
              value={this.state.title}
              className="modal-title"
              placeholder="Untitled"
              onChange={this.handleTitleChange} 
            />
            <form>
            <textarea 
              className="modal-body"
              value={this.state.body}
              placeholder="Just start typing here"
              onChange={this.handleBodyChange} 
            />
            </form>
            <div className="modal-footer">
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
