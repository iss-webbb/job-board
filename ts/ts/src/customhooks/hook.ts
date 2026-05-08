import { useState, useEffect } from "react";
import type {LineItems, CustomerInfo} from "../types/proposal";

export const useProposal = () => {
  const [form, setForm] = useState<CustomerInfo>({
    name: "",
    mail: "",
    deal: 0,
    note: "",
    num: 0,
    compname: "",
  });
  const [service, setService] = useState("");
  const [quant, setQuant] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [press, setPress] = useState<LineItems[]>([]);
  const [step, setStep] = useState(1);
  const gotostep2 = () => setStep(2);   
  const before = () => setStep(1);
  const after = () => setStep(3);
  const [loaded, setLoaded] = useState(false);
  const sub =
    form.name.length >= 3 &&
    form.mail.includes("@") &&
    form.compname.length >= 3;
  const not = service != "" && quant != 0 && price != 0;
  const con = () => console.log({ form, press });
  const [modal, setModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("proposal");
    if (saved) {
      const data = JSON.parse(saved) as {form: CustomerInfo; press: LineItems[]};
      setForm(data.form);
      setPress(data.press);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("proposal", JSON.stringify({ form, press }));
  }, [form, press, loaded]);

  return {
    form,
    step,
    setStep,
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
  };
};