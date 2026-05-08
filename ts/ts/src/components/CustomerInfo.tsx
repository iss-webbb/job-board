import React from "react";

import type { CustomerInfoProps } from "../types/proposal";

export const CustomerInfo = ({
  form,
  setForm,
  sub,
  gotostep2,
  step,
}: CustomerInfoProps) => {
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <p>Name</p>
        <input type="text" name="name" value={form.name} onChange={change} />

        <p>email</p>
        <input type="text" name="mail" value={form.mail} onChange={change}/>

        <p>Company Name</p> 
        <input type="text" name="compname" value={form.compname} onChange={change}/>

        <p>Deal value</p>
        <input type="number" name="deal" value={form.deal} onChange={change} />

        <p>notes</p>
        <textarea name="note" value={form.note} onChange={change}></textarea>

        <p>Valid Until</p>
        <input type="number" name="num" value={form.num} onChange={change} />

        <button disabled={!sub} onClick={gotostep2}>Next</button>

        <p>{step} of 3</p>


      </div>
    </div>
  );
};

export default CustomerInfo