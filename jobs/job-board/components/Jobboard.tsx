import type { JobBoardProps } from "../types/jobboard";

const Jobboard = ({
  sorted,
  setSaveJobs,
  setPage,
  notWorking,
}: JobBoardProps) => {
  return (
    <div>
      <ul className="job-list">
        {sorted.map((item) => (
          <li className="job-card" key={item.id}>
            <div className="job-card-header">
              <p className="title">{item.title}</p>
              <span
                className={`salary-badge ${!item.salary_min && !item.salary_max ? "salary-none" : ""}`}
              >
                {!item.salary_min && !item.salary_max
                  ? "Salary not listed"
                  : `$${item.salary_min.toLocaleString()} – $${item.salary_max.toLocaleString()}`}
              </span>
            </div>
            <div className="job-meta">
              <span>{item.company.display_name}</span>
              <span>·</span>
              <span>{item.location.display_name}</span>
            </div>
            <div className="job-meta">
              <span className="tag">
                {item.contract_type || "Not mentioned"}
              </span>
              <span className="tag">{item.category.label}</span>
            </div>
            <div className="job-card-actions">
              <button
                className="btn-view"
                onClick={() => window.open(item.redirect_url, "_blank")}
              >
                View job
              </button>
              <button
                className="btn-save"
                onClick={() => setSaveJobs((prev) => [...prev, item])}
              >
                Save
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          disabled={!notWorking}
          style={{ backgroundColor: notWorking ? "#2563eb" : "gray" }}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Before
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Jobboard;
