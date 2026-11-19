
import StudentForm from "../components/StudentForm";

export default function StudentRegistration({ onAdd }) {
  return (
    <>
      <div className="page-heading">
        <h1>Student Registration</h1>
        <p>Register a new student here.</p>
      </div>

      <div className="content-card">
        <h2>Student Information</h2>
        <StudentForm onAdd={onAdd} />
      </div>
    </>
  );
}
