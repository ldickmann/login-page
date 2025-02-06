import styled from "styled-components";
import Forms from "../components/Forms";

const SectionLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContainerLogin = styled.div`
  border-radius: 0.625rem;
  background-color: var(--color-background-one);
  padding: 5rem;
  color: var(--color-text-one);

  @media (max-width: 430px) {
    padding: 1.5rem;
  }
`;

const Login = () => {
  return (
    <SectionLogin>
      <ContainerLogin>
        <Forms />
      </ContainerLogin>
    </SectionLogin>
  );
};

export default Login;
