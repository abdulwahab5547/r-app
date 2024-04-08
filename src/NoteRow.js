import React, { useState, useEffect } from 'react';
import NoteView from './NoteView';

function NoteRow({ darkBG, children }) {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteClick = () => {
    setSelectedNote(children);
  };

  const handleClickOutside = (event) => {
    if (selectedNote && !event.target.closest('.note-view-content')) {
      setSelectedNote(null);
    }
  };

  useEffect(() => {
    const handleClickOutsideDoc = (event) => handleClickOutside(event);
    document.addEventListener('mousedown', handleClickOutsideDoc);

    return () => document.removeEventListener('mousedown', handleClickOutsideDoc);
  }, []);

  return (
    <div className="row note-row py-2" onClick={handleClickOutside}>
      <div
        onClick={handleNoteClick}
        className="part p-2"
        style={{ backgroundColor: darkBG }}
      >
        {children}
      </div>
      {selectedNote && <NoteView children={children} darkBG={darkBG} />}
    </div>
  );
}

export default NoteRow;
