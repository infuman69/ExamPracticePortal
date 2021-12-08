import styled from "styled-components";
export const Chapterwrap = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Francois+One&display=swap");
  grid-area: chapters;
  background-color: #ffffff;
  .chapheading {
    text-align: center;
  }
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  font-family: "Francois One", sans-serif;
`;
export const Chapname = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  &:hover {
    background-color: #f0f0f3;
    border-left: 3px solid #3a466b;
    cursor: pointer;
  }
  font-size: 10px;
  color: #3a466b;
`;
export const ChapnameWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 100%;
`;
