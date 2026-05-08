import type { LineItemsProps } from "../types/proposal";

export const LineItems = ({
  setModal,
  press,
  setPress,
  setEditingId,
  before,
  after,
  step,
  sub,
}: LineItemsProps) => {
  return (
    <div>
      <div>
        <ul>
          {press.map((item, index) => (
            <li key={index}>
              service: {item.service} <br />
              Quantity: {item.quant} <br />
              price: {item.price} <br />
              <button
                onClick={() => {
                  setEditingId(item.id);
                  setModal(true);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setPress(press.filter((pressItem) => pressItem.id !== item.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button
          style={{ backgroundColor: !sub ? "gray" : "blue" }}
          onClick={before}
        >
          Before
        </button>

        <button onClick={after} disabled={press.length < 1}>
          {" "}
          next
        </button>

        <p>{step} of 3 </p>
      </div>
    </div>
  );
};

export default LineItems