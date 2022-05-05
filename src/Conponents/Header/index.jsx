import styled from "styled-components";
import logo from "./n2LogoBlackPingentTransparent.png";

const Header = styled.header`
  background-color: #066699;
  height: 100%;
  width: 100%;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px rgba(251, 253, 255, 0.25));
`;

const Logo = styled.img`
  height: 2.8vw;
  margin-left: 1rem;
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 0 0 0 1rem;
`;

const BarraDePesquisa = styled.input`
  width: 22.18vw;
  height: 1.8vw;
  border: none;
  border-radius: 8px;
  margin: 0 1.82vw 0 0;
  color: #616161f4;
  font-size: 1.25vw;
  text-indent: 1rem;
  font-family: inter;
  vertical-align: middle;
  font-weight: 400;
  transition: all 0.3s ease;

  ::placeholder {
    color: #616161f4;
    font-size: 1.25vw;
    text-indent: 1rem;
    font-family: inter;
    vertical-align: middle;
    font-weight: 400;
  }

  :focus {
    outline: none;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.25);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Header>
      <Container>
        <Logo src={logo} />
        <Title>Utimate Repository</Title>
      </Container>
      <BarraDePesquisa type="text" placeholder="Pesquise..." />
    </Header>
  );
};
