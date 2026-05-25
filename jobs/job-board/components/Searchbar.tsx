
import type { SearchBarProps } from "../types/jobboard";

const Searchbar = ({searchTerm, setSearchTerm, setQuery, setPage, setSort, setCountry, setModal}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <p>Search</p>
      <input
        type="text"
        value={searchTerm}
        placeholder="search jobs"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() => {
          setQuery(searchTerm);
          setPage(1);
        }}
      >
        Search
      </button>
      
      <button onClick={() => setModal(true)}>Saved Jobs</button>
      <select onChange={(e) => setSort(e.target.value as "date" | "salary")}>
        <option value="date">Date</option>
        <option value="salary">Salary</option>
      </select>

      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="us">US</option>
        <option value="gb">UK</option>
        <option value="in">India</option>
        <option value="de">Germany</option>
        <option value="au">Australia</option>
        <option value="ca">Canada</option>
        <option value="sg">Singapore</option>
      </select>
    </div>
  );
};

export default Searchbar;
