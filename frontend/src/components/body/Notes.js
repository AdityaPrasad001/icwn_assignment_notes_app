import React from "react";
import Note from "./Note";

import styles from "./Notes.module.css";

const Notes = ({ notes, fetchAllNotes }) => {
  return (
    <ul className={styles.notes}>
      {notes.map((note) => (
        <Note note={note} key={note.id} fetchAllNotes={fetchAllNotes} />
      ))}
    </ul>
  );
};

export default Notes;
