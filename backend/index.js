import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#Qwerty001",
  database: "notes",
});

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.json("hello this is the backend!");
// });

app.get("/", (req, res) => {
  const q = "SELECT * FROM notes_data";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/", (req, res) => {
  const q = "INSERT INTO notes_data (`title`, `note`, `date`) VALUES (?)";
  const values = [req.body.title, req.body.note, req.body.date];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Note has been created successfully");
  });
});

app.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  const q = "DELETE FROM notes_data WHERE id = ?";

  db.query(q, [noteId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
});

app.listen(8801, () => {
  console.log("Connected to backend!");
});
