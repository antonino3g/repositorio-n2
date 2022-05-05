import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import ManualContent from "../ManualContent";
import Posts from "../Posts";

const MainContainer = styled.section`
  display: grid;
  grid-template-areas:
    "header header"
    "sideBar main";
  grid-template-columns: max-content 4fr;
  grid-template-rows: 4vw 1fr;
  width: 100vw;
  height: 100vh;
`;

const SideBar = styled.section`
  background-color: #02416d;
  height: 100%;
  width: 100%;
  grid-area: sideBar;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [postAtivo, setPostAtivo] = useState('');
  useEffect(() => {
  }, [postAtivo]);

  return (
    <MainContainer>
      <Header />
      <SideBar>
        <Posts postAtivo={postAtivo} setPostAtivo={setPostAtivo} />
      </SideBar>
      <ManualContent postAtivo={postAtivo} />
    </MainContainer>
  );
};
