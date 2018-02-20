import React from 'react';
import style from '../styles.css'

class AddNoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'FAA9B0',
      title: '',
      body: '',
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleColorChange(event) {
    let selectedColor = event.target.id.split('btn-');
    this.setState({color: selectedColor[1]});
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value});
  }

  resetState() {
    this.setState({
      color: 'FAA9B0',
      title: '',
      body: '',
    });
  }

  render () {
    if (!this.props.isAddNoteModalOpen) {
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
              <div>
                <input 
                  className="btn-cancel"
                  type="button" 
                  value="Cancel"
                  onClick={this.props.closeNoteModal}
                />
              </div> 
              <div>
              { this.state.title || this.state.body ?  
                <input 
                  className="btn-save"
                  type="button" 
                  value="Add"
                  onClick={() => {
                    this.props.addNote(this.state.color, this.state.title, this.state.body);
                    this.resetState();
                    this.props.closeNoteModal();
                    }
                  }
                /> : 
                <input 
                  className="btn-save disabled"
                  type="button" 
                  value="Add"
                /> 
              }
              </div> 
            </div>
          </div>
        </div>
      )
      
    }
  }
}

export default AddNoteModal;
