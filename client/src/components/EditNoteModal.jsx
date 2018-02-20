import React from 'react';
import style from '../styles.css'

class EditNoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.note.color,
      title: this.props.note.title,
      body: this.props.note.body,
      changed: false,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(event) {
    // console.log(event.target)
    this.setState({
      title: event.target.value,
      changed: true
    });
  }

  handleColorChange(event) {
    let selectedColor = event.target.id.split('btn-');
    this.setState({
      color: selectedColor[1],
      changed: true
    });
  }

  handleBodyChange(event) {
    // console.log(event.target)
    this.setState({
      body: event.target.value,
      changed: true
    });
  }

  render () {
    if (!this.props.isEditNoteModalOpen) {
      return null;
    } else {
      return (
        <div className="backdrop-modal">
          <div 
            className="modal"
            style={{ "borderTop": '8px solid #' + this.state.color}}
          >
            <div className="modal-color" >
              <div 
                id="btn-FAA9B0"
                className={
                  this.state.color === 'FAA9B0' ? "color-selector selected" : "color-selector"
                }
                onClick={this.handleColorChange}
              />
              <div 
                id="btn-B5ECD1"
                className={
                  this.state.color === 'B5ECD1' ? "color-selector selected" : "color-selector"
                }                onClick={this.handleColorChange}
              />
              <div 
                id="btn-FBDBAE"
                className={
                  this.state.color === 'FBDBAE' ? "color-selector selected" : "color-selector"
                }                onClick={this.handleColorChange}
              />
              <div 
                id="btn-AECCFB"
                className={
                  this.state.color === 'AECCFB' ? "color-selector selected" : "color-selector"
                }                onClick={this.handleColorChange}
              />
            </div>
            <div >
              <input 
                className="modal-title"
                type="text"
                value={this.state.title}
                placeholder="Untitled"
                onChange={this.handleTitleChange} 
              />
            </div>
            <div>
              <textarea 
                className="modal-body"
                value={this.state.body}
                placeholder="Just start typing here"
                onChange={this.handleBodyChange} 
              />
            </div>
            <div className="modal-footer">
              <input 
                className="btn-cancel"
                type="button" 
                value="Cancel"
                onClick={this.props.closeNoteModal}
              />
              <input 
                className={this.state.changed ? "btn-save" : "btn-save disabled"}
                type="button" 
                value="Save"
                onClick={this.state.changed ? () => {
                  this.props.editNote(this.props.index, this.state.color, this.state.title, this.state.body);
                  this.props.closeNoteModal();
                  } : () => {}
                }
              />
            </div>
          </div>
        </div>
      )
      
    }
  }
}

export default EditNoteModal;
