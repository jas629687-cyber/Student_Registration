
import { Users, Building2, GraduationCap } from "lucide-react";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard({ students }) {
  const departments = new Set(students.map(s => s.department)).size;

  return (
    <>
      <div className="page-heading">
        <h1>Dashboard</h1>
        <p>Welcome to Student Management System</p>
      </div>

      <div className="dashboard-grid">
        <DashboardCard title="Total Students" value={students.length} icon={<Users />} />
        <DashboardCard title="Departments" value={departments} icon={<Building2 />} />
        <DashboardCard title="Third Year Students" value={students.filter(s => s.year === "3rd Year").length} icon={<GraduationCap />} />
      </div>

      <div className="content-card">
        <h2>Welcome to StudentHub!</h2>
        <p>Manage student registration, records and ID cards easily.</p>
      </div>
    </>
  );
}
