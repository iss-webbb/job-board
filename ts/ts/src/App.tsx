import "./App.css";
import { useProposal } from "./customhooks/hook";
import CustomerInfo from "./components/CustomerInfo";
import LineItems from "./components/LineItems";
import Preview from "./components/preview";
import ProposalForm from "./components/Proposal";

const App = () => {
  const {
    form,
    setForm,
    service,
    con,
    gotostep2,
    setService,
    quant,
    setQuant,
    price,
    setPrice,
    press,
    setPress,
    not,
    modal,
    setModal,
    editingId,
    setEditingId,
    sub,
    after,
    before,
    step    
  } = useProposal();


  return <div className="container">
    {step === 1 && <CustomerInfo form = {form} setForm={setForm} sub={sub} gotostep2={gotostep2} step={step}/>}
    {step ===2 && <ProposalForm 
    press= {press}
    setPress = {setPress}
    service ={service}
    setService={setService}
    quant={quant}
    setQuant={setQuant}
    price={price}
    setPrice={setPrice}
    editingId={editingId}
    setEditingId={setEditingId}
    modal={modal}
    setModal={setModal}
    not={not} /> }
    {step===2 && <LineItems setModal={setModal} press={press} setPress={setPress} setEditingId={setEditingId} before={before} after={after} step={step} sub={sub} />}
    {step === 3 && <Preview press={press} form={form} con={con} gotostep2= {gotostep2} step={step} />}
  </div>;   
};

export default App;