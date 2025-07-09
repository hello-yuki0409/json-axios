import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>-Styled Components-</STitle>
      <button>FIGHT</button>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #222;
  borderradius: 20px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  border: solid 2px #222;
  borderradius: 20px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
