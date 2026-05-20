import type { ModalProps } from "../types/jobboard";

const Modal = ({ saveJobs, modal, setModal, filter }: ModalProps) => {
  return (
    <div>
      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <ul className="modal-job-list">
              {saveJobs.length === 0 ? (
                <p>No Saved Jobs</p>
              ) : (
                saveJobs.map((item) => (
                  <li key={item.id}>
                    <p className="modal-title">Title: {item.title}</p>
                    <p>Company: {item.company.display_name}</p>
                    <p>Loaction: {item.location.display_name}</p>
                    <p className="salary">
                      salary:{" "}
                      {!item.salary_min && !item.salary_max
                        ? " salary not mentioned "
                        : item.salary_min === 0
                          ? `${item.salary_max.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`
                          : `${item.salary_min.toLocaleString("en-GB", { maximumFractionDigits: 0 })} - ${item.salary_max.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`}
                    </p>
                    <p>
                      Contract type: {item.contract_type || "Not mentioned"}
                    </p>
                    <p>Category: {item.category.label}</p>
                    <button
                      onClick={() => window.open(item.redirect_url, "_blank")}
                    >
                      View Job
                    </button>
                    <button onClick={() => filter(item.id)}>Remove Job</button>
                  </li>
                ))
              )}
            </ul>
            <div className="close">
              <button className="close-btn" onClick={() => setModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
