import { FaUserCircle, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const FormsLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.625rem;
  gap: 1.25rem;
`;

const InputForms = styled.input`
  border-radius: 0.625rem;
  background-color: var(--color-background-three);
  font-size: 1rem;
  border: none;
  outline: none;
  width: 100%;
  padding: 0.625rem;
`;

const TitleForms = styled.h3`
  color: var(--color-text-one);
`;

const IconUser = styled(FaUserCircle)`
  font-size: 10rem;
  color: var(--color-text-one);
`;

const IconEmail = styled(MdOutlineEmail)`
  font-size: 1.5rem;
  color: var(--color-background-two);
`;

const IconLock = styled(IoIosLock)`
  font-size: 1.5rem;
  color: var(--color-background-two);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background-three);
  border-radius: 0.625rem;
  padding: 0.4rem;
  width: 95%;
  position: relative;
  border: ${({ $hasError }) => ($hasError ? "2px solid red" : "none")};
`;

const ToggleIcon = styled.div`
  cursor: pointer;
  color: var(--color-text-two);
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 0.875rem;
  font-family: var(--font-secondary);
`;

const Checkbox = styled.input`
  margin-right: 0.625rem;
`;

const ContainerLembrarEsqueci = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

const ErrorTooltip = styled.div`
  position: absolute;
  top: -35px;
  right: 10px;
  background: white;
  color: red;
  padding: 0.5rem;
  border-radius: 0.625rem;
  border: 1px solid red;
  font-size: 0.875rem;
  white-space: nowrap;
  display: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50px;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: rgba(255, 0, 0, 0.9) transparent transparent transparent;
  }
`;

const ErrorIconWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${ErrorTooltip} {
    display: block;
  }
`;

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Valid email is required: exemplo@luksdev.com");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      return;
    }
    alert("Login successful");
  };

  return (
    <FormsLogin onSubmit={handleSubmit}>
      <IconUser />
      <TitleForms>WELCOME</TitleForms>
      <InputWrapper $hasError={!!error}>
        <IconEmail />
        <InputForms
          type="text"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {error && (
          <ErrorIconWrapper>
            <BsExclamationCircleFill color="red" />
            <ErrorTooltip>{error}</ErrorTooltip>
          </ErrorIconWrapper>
        )}
      </InputWrapper>
      <InputWrapper>
        <IconLock />
        <InputForms
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          autoComplete="current-password"
        />
        <ToggleIcon onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaRegEye />}
        </ToggleIcon>
      </InputWrapper>
      <ContainerLembrarEsqueci>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember</label>
        </CheckboxWrapper>
        <Button
          bgColor="transparent"
          fontSize="0.875rem"
          borderRadius="0.2rem"
          onClick={() => alert("Esqueci minha senha")}
        >
          Forgot Password?
        </Button>
      </ContainerLembrarEsqueci>
      <ButtonGroup>
        <Button type="submit" width="192px" height="59px">
          Login
        </Button>
        <Button
          bgColor="var(--color-background-five)"
          width="332px"
          height="35px"
          fontSize="0.75rem"
        >
          Sign up
        </Button>
      </ButtonGroup>
    </FormsLogin>
  );
};

export default Forms;
