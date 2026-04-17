import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addEmployee = () => {
    if (!name || !email) return;

    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = { name, email };
      setEmployees(updated);
      setEditIndex(null);
    } else {
      const newEmp = { name, email };
      setEmployees([...employees, newEmp]);
    }

    setName("");
    setEmail("");
  };

  const editEmployee = (index) => {
    setName(employees[index].name);
    setEmail(employees[index].email);
    setEditIndex(index);
  };

  // ✅ FIXED: DELETE inside App
  const deleteEmployee = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "200px",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h2>EMS</h2>
        <p>Dashboard</p>
        <p>Employees</p>
        <p>Attendance</p>
        <p>Payroll</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>AI Employee Management System</h1>

        <h2>{editIndex !== null ? "Update Employee" : "Add Employee"}</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <button onClick={addEmployee} style={{ marginLeft: "10px" }}>
          {editIndex !== null ? "Update" : "Add"}
        </button>

        <h2>Employee List</h2>

        <ul>
          {employees.map((emp, index) => (
            <li key={index}>
              {emp.name} - {emp.email}

              <button
                onClick={() => editEmployee(index)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmployee(index)}
                style={{ marginLeft: "10px", background: "red", color: "white" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;