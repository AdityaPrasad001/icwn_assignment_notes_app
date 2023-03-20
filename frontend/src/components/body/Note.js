import React from "react";
import Card from "../ui/Card";
import axios from "axios";

import styles from "./Note.module.css";

const Note = ({ note, fetchAllNotes }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8801/" + id);
      // window.location.reload();
      fetchAllNotes();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className={styles.note}>
      <h2 className={styles.heading}>{note.title}</h2>
      <div className={styles.message}>{note.note}</div>
      <div className={styles.actions}>
        <p>{note.date}</p>
        <i
          className="fa-solid fa-trash"
          onClick={() => handleDelete(note.id)}
        ></i>
      </div>
    </Card>
  );
};

export default Note;
