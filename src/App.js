import "./App.css";
import styled from "styled-components";

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
      <Title>
        This is <RepoName>The N2 Utimate Repository!</RepoName>
      </Title>
    </>
  );
}

export default App;
