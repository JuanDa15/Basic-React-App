import React from "react";

export default function Form(props) {
  const { name, availableTickets } = props;
  const [quantity, setQuantity] = React.useState(0);

  function handleQuantity(event) {
    setQuantity(Number(event.target.value));
  }

  return (
    <form>
      <h3>{name}</h3>
      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </button>
      <input
        value={quantity}
        onInput={handleQuantity}
        disabled={quantity >= availableTickets || quantity <= 0}
      />
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= availableTickets}
      >
        +
      </button>
    </form>
  );
}
