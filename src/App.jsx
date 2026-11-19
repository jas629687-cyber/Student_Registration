
import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import StudentRegistration from "./pages/StudentRegistration";
import StudentList from "./pages/StudentList";
import StudentID from "./pages/StudentID";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [students, setStudents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("students")) || [];
    } catch {
      return [];
    }
  });

  const addStudent = (student) => {
    const updated = [
      ...students,
      { ...student, id: Date.now() }
    ];

    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    setActivePage("Student List");
  };

  const deleteStudent = (id) => {
    const updated = students.filter(
      (student) => student.id !== id
    );

    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">
        <Navbar />

        <main className="page-content">
          {activePage === "Dashboard" && (
            <Dashboard students={students} />
          )}

          {activePage === "Registration" && (
            <StudentRegistration onAdd={addStudent} />
          )}

          {activePage === "Student List" && (
            <StudentList
              students={students}
              onDelete={deleteStudent}
            />
          )}

          {activePage === "Student ID" && (
            <StudentID students={students} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
