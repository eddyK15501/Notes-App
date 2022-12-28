import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('')
    const [placeHolder, setPlaceHolder] = useState('Type to add a note...')
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        } else {
            setPlaceHolder('Please enter a valid note')
        }
    }

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder={placeHolder}
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;