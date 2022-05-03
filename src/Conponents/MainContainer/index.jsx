import styled from "styled-components";
import dadosDosPosts from '../../api/posts';

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

const ManualContent = styled.main`
  background-color: #f8f8ec;
  height: 100%;
  width: 100%;
  grid-area: main;
`;

const Post = styled.div`
  width: 100%;
  height: 4.58vw;
  background-color: #5bcfd3;
  text-align: left;
  padding: 0 0 0 1rem;
  display: flex;
  align-items: center;
  font-size: 1.77vw;
  font-weight: 400;
  font-family: inter;
  color: #02416d;
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  

  function geraPosts(dados) {
    return dados.map((post) => (
      <Post>
        <h3>{post.title}</h3>
      </Post>
    ));
  }

  return (
    <MainContainer>
      <Header />
      <SideBar>{geraPosts(dadosDosPosts)}</SideBar>
      <ManualContent />
    </MainContainer>
  );
};
