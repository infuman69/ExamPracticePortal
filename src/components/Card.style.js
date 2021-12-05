import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  width: 350px;
  background-color: #ae00fb;
  align-items: center;
  border-radius: 6px;
  margin: 13px 30px;
  color: white;
  &:hover {
    transform: translateY(-30px);
    cursor: pointer;
    box-shadow: 1px 6px 20px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 6px 20px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 6px 20px -6px rgba(0, 0, 0, 0.75);
    transition: 0.2s ease all;
  }
`;
export const Subjectinfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px 30px;
  height: 70px;
`;
export const Info = styled.span`
  margin: 10px 10px;
`;
