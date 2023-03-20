import React, { useEffect, useState } from "react";
import axios from "axios";
import Body from "../components/body/Body";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8801/");
      console.log(res.data);
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div>
      <Body notes={notes} fetchAllNotes={fetchAllNotes} />
    </div>
  );
};

export default HomePage;
