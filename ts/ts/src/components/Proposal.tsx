import type { ProposalFormProps } from "../types/proposal";

const Proposal = ({
  press,
  setPress,
  service,
  setService,
  quant,
  setQuant,
  price,
  setPrice,
  editingId,
  setEditingId,
  modal,
  setModal,
  not,
}: ProposalFormProps) => {
  return (
    <div>
      <div>
        {modal && (
          <div className="modal">
            <div className="inside">
              <p>Service Input Name</p>
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />

              <p>Quantity</p>
              <input
                type="number"
                value={quant}
                onChange={(e) => setQuant(Number(e.target.value))}
              />

              <p>Price</p>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />

              <button
                style={{ backgroundColor: "blue" }}
                onClick={() => {
                  setPress(
                    press.map((item) =>
                      item.id === editingId
                        ? { ...item, service, quant, price }
                        : item,
                    ),
                  );
                  setModal(false);
                  setEditingId(null);

                  setService("");
                  setQuant(0);
                  setPrice(0);
                }}
              >
                submit
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <p>Service Input Name</p>
        <input
          className="inp"
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <p>Quantity</p>
        <input
          className="inp"
          type="number"
          value={quant}
          onChange={(e) => setQuant(Number(e.target.value))}
        />

        <p>Price</p>
        <input
          className="inp"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <button
          className="btn"
          onClick={() => {
            setPress([...press, { service, price, quant, id: String(Date.now()) }]);

            setService("");
            setPrice(0);
            setQuant(0);
          }}
          disabled={!not}
          style={{ backgroundColor: !not ? "gray" : "blue" }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Proposal