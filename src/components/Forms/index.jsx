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
  padding: 0.625rem;
  padding-inline: 2rem;
  background-color: var(--color-background-three);
  border: none;
  outline: none;
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
  margin-right: 0.625rem;
  color: var(--color-background-two);
`;

const IconLock = styled(IoIosLock)`
  font-size: 1.5rem;
  margin-right: 0.625rem;
  color: var(--color-background-two);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background-three);
  border-radius: 0.625rem;
  padding: 0.625rem;
  width: 100%;
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
      <Button type="submit">Entrar</Button>
    </FormsLogin>
  );
};

export default Forms;
