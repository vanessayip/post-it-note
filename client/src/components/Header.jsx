import React from 'react';
import style from '../styles.css'
import AddNoteModal from './AddNoteModal.jsx'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div id="header">
      Notes App
        <input 
          id="btn-add-note"
          type="button" 
          value="+   Add Note"
          onClick={() => this.props.openAddNoteModal()}
        />
        <AddNoteModal 
          isAddNoteModalOpen={this.props.isAddNoteModalOpen}
          addNote={this.props.addNote}
          closeAddNoteModal={() => this.props.closeAddNoteModal()}
          />
      </div>
    )
  }
}

export default Header;
