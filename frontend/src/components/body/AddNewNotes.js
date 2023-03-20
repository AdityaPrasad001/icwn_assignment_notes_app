import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

import Card from "../ui/Card";
import styles from "./AddNewNotes.module.css";

const AddNewNotes = (props) => {
  const [note, setNote] = useState({
    title: "",
    note: "",
    date: "",
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const newDate = new Date().toLocaleDateString();
  const newTime = new Date().toLocaleTimeString();
  const newdate = `${newDate} ${newTime}`;

  const onCancel = () => {
    navigate("/");
  };
  const handleChange = (event) => {
    setNote((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
      date: newdate,
    }));
  };
  console.log(note);

  if (note.title !== "" && note.note !== "" && note.date !== "") {
    setIsValid(true);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isValid) return;
    try {
      await axios.post("http://localhost:8801", note);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.modal}>
        <h2>Take a note...</h2>

        <div className={styles.input}>
          <input
            placeholder="Enter Heading"
            name="title"
            onChange={handleChange}
          ></input>
          <textarea
            className={styles.note}
            placeholder="Enter Message..."
            onChange={handleChange}
            name="note"
          ></textarea>
        </div>

        <footer>
          <Button className={styles.cancel} onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>Submit</Button>
        </footer>
      </Card>
    </div>
  );
};

export default AddNewNotes;
