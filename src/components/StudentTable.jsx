
import { Trash2 } from "lucide-react";

export default function StudentTable({ students, onDelete }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Department</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr><td colSpan="6">No students registered yet.</td></tr>
          ) : students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>{student.year}</td>
              <td>
                <button className="delete-btn" onClick={() => onDelete(student.id)}>
                  <Trash2 size={17} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
