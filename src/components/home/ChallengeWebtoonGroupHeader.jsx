import React from "react";
import styled from "styled-components";

const ChallengeWebtoonGroupHeader = ({ groupName }) => {
  return (
    <StyledRoot>
      <span>{groupName}</span>
      <Line />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  & > span {
    width: 7.2rem;
    height: 2.8rem;
    background-color: #60d171;
    color: #f9f9fc;
    border-radius: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
  }
`;

const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: #60d171;
`;

export default ChallengeWebtoonGroupHeader;
