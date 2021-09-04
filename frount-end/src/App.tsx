import React from "react";
import { Router } from "./Router";
import styled from "styled-components";

export const App = (): JSX.Element => (
  <PageContainer>
    <Router />
  </PageContainer>
);

const PageContainer = styled.div`
  height: 100vh;
  background-color: #404040;
`;
