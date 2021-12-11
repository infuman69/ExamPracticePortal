import styled from "styled-components";

export const Quewrap = styled.div`
  grid-area: que;
  background-color: #f5f5f5;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Quesbox = styled.div`
  width: 70%;
  height: 25%;
  background-color: #ffffff;
  margin: 10px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;
export const Optbox = styled(Quesbox)`
  cursor: pointer;
`;
export const Ansattemptbox = styled(Optbox)`
  background-color: blue;
  color: white;
`;
