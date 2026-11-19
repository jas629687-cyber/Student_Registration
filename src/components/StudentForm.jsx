
import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    email: "",
    phone: "",
    department: "",
    year: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some(value => !value.trim())) {
      alert("Please fill all fields");
      return;
    }

    onAdd(form);

    setForm({
      name: "",
      rollNumber: "",
      email: "",
      phone: "",
      department: "",
      year: ""
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label>Student Name</label>
          <input name="name" placeholder="Enter name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Roll Number</label>
          <input name="rollNumber" placeholder="Enter roll number" value={form.rollNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input name="phone" type="tel" pattern="[0-9]{10}" placeholder="10-digit phone number" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select name="department" value={form.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="AIML">AIML</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
          </select>
        </div>

        <div className="form-group">
          <label>Year</label>
          <select name="year" value={form.year} onChange={handleChange} required>
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>
      </div>

      <button className="primary-btn" type="submit">Register Student</button>
      <button className="secondary-btn" type="reset" onClick={() => setForm({name:"",rollNumber:"",email:"",phone:"",department:"",year:""})}>Reset</button>
    </form>
  );
}
