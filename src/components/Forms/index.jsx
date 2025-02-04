import { FaUserCircle, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import styled from "styled-components";
import { useState } from "react";
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
  padding: 0.5rem 2.5rem 0.5rem 4rem;
`;

const TitleForms = styled.h3`
  color: var(--color-text-one);
`;

const IconUser = styled(FaUserCircle)`
  font-size: 8.5rem;
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
  padding: 0.625rem;
  width: 95%;
`;

const ToggleIcon = styled.div`
  font-size: 1.2rem;
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormsLogin>
      <IconUser />
      <TitleForms>LOGIN</TitleForms>
      <InputWrapper>
        <IconEmail />
        <InputForms type="text" placeholder="Username or Email" />
      </InputWrapper>
      <InputWrapper>
        <IconLock />
        <InputForms
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <ToggleIcon onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaRegEye />}
        </ToggleIcon>
      </InputWrapper>
      <CheckboxWrapper>
        <Checkbox type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Lembrar minha senha</label>
      </CheckboxWrapper>
      <ButtonGroup>
        <Button type="submit" width="192px" height="69px">
          Entrar
        </Button>
        <Button
          bgColor="var(--color-background-five)"
          width="332px"
          height="32px"
          fontSize="0.75rem"
        >
          Cadastrar
        </Button>
      </ButtonGroup>
    </FormsLogin>
  );
};

export default Forms;
