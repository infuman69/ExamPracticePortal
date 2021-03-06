import styled from "styled-components";

export const QuestionNumWrap = styled.div`
  grid-area: quenum;
  background-color: #3a466b;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Numbtn = styled.button`
  border-radius: 50%;
  background-color: #282f47;
  height: 50px;
  width: 50px;
  margin: 10px 0;
  border: 3px solid ${(props) => (props.clicked === "clicked" ? "red" : "blue")};
  color: white;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`;
export const Attemptbtn = styled(Numbtn)`
  background-color: blue;
`;
