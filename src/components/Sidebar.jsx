
import {
  LayoutDashboard,
  UserPlus,
  Users,
  IdCard,
  GraduationCap
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Registration", icon: UserPlus },
    { name: "Student List", icon: Users },
    { name: "Student ID", icon: IdCard }
  ];

  return (
    <aside className="sidebar">

      <div className="brand">
        <GraduationCap size={30} />
        <h2>StudentHub</h2>
      </div>

      <p className="menu-title">MAIN MENU</p>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        StudentHub © 2026
      </div>

    </aside>
  );
}

export default Sidebar;
