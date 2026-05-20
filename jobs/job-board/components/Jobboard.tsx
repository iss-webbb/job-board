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
            <p className="title">Title: {item.title}</p>
            <p>Company: {item.company.display_name}</p>
            <p>Loaction: {item.location.display_name}</p>
            <p className="salary">
              salary: {!item.salary_min && !item.salary_max
                ? " salary not mentioned "
                : item.salary_min === 0
                  ? `${item.salary_max.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`
                  : `${item.salary_min.toLocaleString("en-GB", { maximumFractionDigits: 0 })} - ${item.salary_max.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`}
            </p>
            <p>Contract type: {item.contract_type || "Not mentioned"}</p>
            <p>Category: {item.category.label}</p>
            <button onClick={() => window.open(item.redirect_url, "_blank")}>
              View Job
            </button>
            <button
              onClick={() => {
                setSaveJobs((prev) => [...prev, item]);
              }}
            >
              Save Jobs
            </button>
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
