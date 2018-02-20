import React from 'react';
import style from '../styles.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="app-header">
        <input 
          id="btn-add-note"
          type="button" 
          value="+   Add Note"
          onClick={() => this.props.openAddNoteModal()}
        />
      </div>
    )
  }
}

export default Header;
