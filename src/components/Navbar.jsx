
import { Bell, Search, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Student Management</h2>
        <p>Manage your student records</p>
      </div>
      <div className="nav-actions">
        <Search />
        <Bell />
        <UserCircle size={28} />
      </div>
    </header>
  );
}
