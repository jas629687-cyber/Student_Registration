
import StudentTable from "../components/StudentTable";

export default function StudentList({ students, onDelete }) {
  return (
    <>
      <div className="page-heading">
        <h1>Student List</h1>
        <p>View all registered students.</p>
      </div>

      <div className="content-card">
        <h2>Registered Students ({students.length})</h2>
        <StudentTable students={students} onDelete={onDelete} />
      </div>
    </>
  );
}
