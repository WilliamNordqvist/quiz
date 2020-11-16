import styled from "styled-components";

export const Question = styled.div`
  width: 100%;
  min-height: 45px;
  cursor: pointer;
  margin: 5px 0;
  padding: 5px 0;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: ${(props) =>
    props.item === props.answer && props.showAnswer
      ? "#006A4E"
      : props.item !== props.answer && props.showAnswer
      ? "#AA0000"
      : "rgba(53,53,53,1)"};

  :hover {
    background: ${(props) =>
      props.item === props.answer && props.showAnswer
        ? "#006A4E"
        : props.item !== props.answer && props.showAnswer
        ? "#AA0000"
        : "rgba(53,53,53,.7)"};
  }
`;
