import React from "react";
import Notes from "./Notes";

import styles from "./Body.module.css";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

const Body = ({ notes, fetchAllNotes }) => {
  return (
    <div className={styles.body}>
      <Card className={styles.input}>
        <Link to={"new-note"}>
          <input placeholder="Take a note..." />
        </Link>
      </Card>
      <Notes notes={notes} fetchAllNotes={fetchAllNotes} />
    </div>
  );
};

export default Body;
