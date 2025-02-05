import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.$bgColor || "var(--color-background-four)"};
  color: var(--color-text-one);
  border: none;
  border-radius: ${(props) => props.$borderRadius || "0.625rem"};
  cursor: pointer;
  font-family: var(--font-secondary);
  font-size: ${(props) => props.$fontSize || "2rem"};
  font-weight: 400;
  transition: background-color 0.3s;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  &:hover {
    background-color: rgba(19, 103, 85, 0.68);
  }
`;

const Button = ({
  children,
  bgColor,
  width,
  height,
  fontSize,
  borderRadius,
  onClick,
}) => {
  return (
    <ButtonStyled
      $bgColor={bgColor}
      $width={width}
      $height={height}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
