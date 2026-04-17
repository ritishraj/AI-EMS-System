import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let employees = [];

app.post("/add-employee", (req, res) => {
  const { name, email } = req.body;

  const newEmp = { name, email };
  employees.push(newEmp);

  res.json({ message: "Employee added", employees });
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});