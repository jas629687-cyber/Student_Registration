
function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="dashboard-card">
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

      <div className={`card-icon ${color}`}>
        {icon}
      </div>
    </div>
  );
}

export default DashboardCard;
