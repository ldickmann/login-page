import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyled = styled.button`
  background-color: var(--color-background-four);
  color: var(--color-text-one);
  padding: 0.9375rem 3.125rem;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 400;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--color-background-three);
  }
`;

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
