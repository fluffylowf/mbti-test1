import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Results() {
  return (
    <Container>
      <StyledLink to="/results">
        <QuestionContainer>
          <h1>축하합니다🎉🎉🎉 정상입니다😀 </h1>
        </QuestionContainer>
        <AnswerContainer>
          <Button variant="contained" color="success">
            공유 안하기
          </Button>
        </AnswerContainer>
      </StyledLink>
    </Container>
  );
}
