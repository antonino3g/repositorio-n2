import { useEffect } from "react";
import styled from "styled-components";

const ManualContent = styled.main`
  background-color: #f8f8ec;
  height: 100%;
  width: calc(100% - 8.125vw * 2);
  grid-area: main;
  padding: 0 8.125vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #02416d; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #f8f8ec; /* creates padding around scroll thumb */
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #318ccd; /* color of the scroll thumb */
  }
`;

const Title = styled.h1`
  font-size: 3.33vw;
  font-weight: 400;
  font-family: inter;
  width: 63vw;
  margin: 6.14vw 0 1vw;
  text-align: center;
`;

const Author = styled.h3`
  font-size: 1vw;
  font-weight: 400;
  font-family: inter;
  width: 63vw;
  margin: 0 0 3vw;
  text-align: right;
`;

const Paragraph = styled.p`
  font-size: 1.25vw;
  font-weight: 400;
  font-family: inter;
  color: #02416d;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-align: justify;
  text-indent: 2vw;
  display: flex;
  width: 63vw;
  margin-bottom: 2vw;
`;

const SubHeading = styled.h2`
  width: 63vw;
  font-size: 2vw;
  font-weight: bold;
  font-family: inter;
  color: #02416d;
  margin: 0;
  margin-bottom: 3vw;
`;
const Image = styled.img`
  width: 63vw;
  margin-bottom: 6.14vw;
  border-radius: 0.5vw;
  filter: drop-shadow(0px 4px 4px rgba(7, 40, 100, 0.514));
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ postAtivo }) => {
  useEffect(() => {}, [postAtivo]);

  function filtroGeral() {
    if (postAtivo !== "") {
      // eslint-disable-next-line array-callback-return
      return postAtivo.body.map((componente) => {
        if (componente.paragraph) {
          return <Paragraph>{componente.paragraph}</Paragraph>;
        } else if (componente.image) {
          return <Image src={componente.image} alt="Illustrative" />;
        } else if (componente.sub_heading) {
          return <SubHeading>{componente.sub_heading}</SubHeading>;
        }
      });
    }
  }

  function formataAutor() {
    if (postAtivo !== "") {
      return ` por ${postAtivo.author}`;
    }
  }

  return (
    <ManualContent>
      <Title>{postAtivo.title}</Title>
      <Author> {formataAutor()}</Author>
      {filtroGeral()}
    </ManualContent>
  );
};
