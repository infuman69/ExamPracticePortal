import styled from "styled-components";

export const PhysicsWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "chapters quenum quenum quenum quenum quenum"
    "chapters que    que    que    que    que   "
    "chapters que    que    que    que    que   "
    "chapters que    que    que    que    que   "
    "chapters que    que    que    que    que   "
    "chapters que    que    que    que    que   ";
  width: 875px;
  height: 59%;
  border-radius: 10px;
  box-shadow: -2px 1px 12px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 1px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 1px 12px 0px rgba(0, 0, 0, 0.75);
`;
