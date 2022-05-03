import { useState } from "react";
import styled from "styled-components";
import dadosDosPosts from "../../api/posts";
import ManualContent from "../ManualContent";
import Posts from "../Posts";

const MainContainer = styled.section`
  display: grid;
  grid-template-areas:
    "header header"
    "sideBar main";
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 5.1vw 1fr;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #066699;
  height: 100%;
  width: 100%;
  grid-area: header;
`;

const SideBar = styled.section`
  background-color: #02416d;
  height: 100%;
  width: 100%;
  grid-area: sideBar;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [postAtivo, setPostAtivo] = useState({
    id: "",
    active: false,
  });

  return (
    <MainContainer>
      <Header />
      <SideBar>
        <Posts setPostAtivo={setPostAtivo} />
      </SideBar>
      <ManualContent postAtivo={postAtivo} />
    </MainContainer>
  );
};

//falta: 
// - passar o setEstado para o manualContent
// - fazer a função de alterar o estado do active para true no manual content
// - fazer a função de alterar o estado do active para false no gerador de posts
