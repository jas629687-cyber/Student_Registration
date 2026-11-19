
import { useState } from "react";

export default function StudentID({ students }) {
  const [selectedId, setSelectedId] = useState("");

  const student = students.find(s => String(s.id) === selectedId);

  return (
    <div>
      <div className="page-heading">
        <h1>Student ID Card</h1>
        <p>Generate student identity details.</p>
      </div>

      <div className="content-card">
        <select
          className="student-select"
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        {student && (
          <div className="id-card">
            <h2>STUDENT IDENTITY CARD</h2>
            <h1>{student.name}</h1>
            <p>Roll Number: {student.rollNumber}</p>
            <p>Department: {student.department}</p>
            <p>Year: {student.year}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
