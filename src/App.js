import "./App.css";
import styled from "styled-components";
import MainContainer from "./Conponents/MainContainer";

function App() {
  const Title = styled.h1`
    text-align: center;
  `;

  const RepoName = styled.strong`
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
  return (
    <>
      <MainContainer />
    </>
  );
}

export default App;
