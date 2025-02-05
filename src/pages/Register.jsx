import styled from "styled-components";

const SectionRegister = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContainerRegister = styled.div`
  border-radius: 0.625rem;
  background-color: var(--color-background-one);
  padding: 5rem;
  color: var(--color-text-one);
`;

const Register = () => {
  return (
    <SectionRegister>
      <ContainerRegister>
        <div>
          <h1>Em desenvolvimento</h1>
        </div>
      </ContainerRegister>
    </SectionRegister>
  );
};

export default Register;
