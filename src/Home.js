import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  background: url(https://source.unsplash.com/okVXy9tG3KY/1920x1080);
`;

export default function Home() {
  return (
    <Container>
      <StyledLink to="/2">
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="success">
            테스트 시작하기
          </Button>
        </Stack>
      </StyledLink>
    </Container>
  );
}
