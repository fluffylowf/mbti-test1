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
  background: url(https://source.unsplash.com/QBLRt7r9phc/1920x1080);
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

export default function Question5() {
  return (
    <Container>
      <StyledLink to="/6">
        <QuestionContainer>
          <Box
            sx={{
              bgcolor: "secondary.main",
              color: "secondary.contrastText",
              p: 2,
            }}
          >
            사회의 규칙, 논리, 도덕 등을 중요시합니까?
          </Box>
        </QuestionContainer>
        <AnswerContainer>
          <Stack spacing={5} direction="row">
            <Button variant="contained" color="success">
              Yes
            </Button>
            <Button variant="contained" color="success">
              No
            </Button>
          </Stack>
        </AnswerContainer>
      </StyledLink>
    </Container>
  );
}
