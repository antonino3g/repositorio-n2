import { useEffect } from "react";
import styled from "styled-components";
import posts from "../../api/posts";

const ManualContent = styled.main`
  background-color: #f8f8ec;
  height: 100%;
  width: 100%;
  grid-area: main;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ postAtivo }) => {
  useEffect(() => {}, [postAtivo]);

  return (
    <ManualContent>
      <h1>{postAtivo.title}</h1>
      <p>{postAtivo.body}</p>
    </ManualContent>
  );
};
