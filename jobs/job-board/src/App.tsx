import { useCustomhooks } from "../hooks/Customhooks";
import Searchbar from "../components/Searchbar";
import Jobboard from "../components/Jobboard"
import Modal from "../components/modal"

const App = () => {
  const {
    data,
    searchTerm,
    setSearchTerm,
    setQuery,
    setPage,
    saveJobs,
    setSaveJobs,
    setSort,
    sorted, 
    removeJobs, 
    notWorking, 
    modal, 
    setModal,
    setCountry
  } = useCustomhooks();

  return (
    <div className="container">
      {
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setQuery={setQuery}
          setPage={setPage}
          setModal={setModal}
          setSort={setSort}
          setCountry = {setCountry}
        />
      }

      {
        <Jobboard
          data={data}
          setSaveJobs={setSaveJobs}
          setPage={setPage}
          sorted={sorted}
          notWorking = {notWorking}
          saveJobs={saveJobs}
        />
      }

      {
        <Modal saveJobs={saveJobs} modal={modal} setModal={setModal} filter={removeJobs} />
      }
    </div>
  );
};

export default App;
