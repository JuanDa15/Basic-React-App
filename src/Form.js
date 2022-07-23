import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #f0f;
  border-radius: 0.5rem;
  color: #f0f;
  font-weight: 600;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.color2};
    color: #fff;
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

const MovieTitle = styled.h3`
  font-family: sans-serif;
  color: #f0f;
  text-transform: capitalize;
  border-bottom: 2px solid #a0a;
`;
const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #f0f;
  font-weight: 600;
  font-size: 1.2rem;
  color: #f0f;
`;
const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  border: 2px solid #a0a;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default function Form(props) {
  const { name, availableTickets, updateTheme } = props;
  const [quantity, setQuantity] = React.useState(0);

  function handleQuantity(event) {
    setQuantity(Number(event.target.value));
  }

  return (
    <StyledForm onMouseEnter={() => updateTheme()}>
      <MovieTitle>{name}</MovieTitle>
      <Button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </Button>
      <Input
        value={quantity}
        onInput={handleQuantity}
        disabled={quantity >= availableTickets || quantity <= 0}
      />
      <Button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= availableTickets}
      >
        +
      </Button>
    </StyledForm>
  );
}
