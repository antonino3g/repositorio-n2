import { useEffect } from "react";
import styled from "styled-components";
import posts from "../../api/posts";

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
export default ({ setPostAtivo }) => {
  useEffect(() => {
    window.addEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(e) {
    const idNew = [{ id: e.target.id }];
    setPostAtivo((state) => {
      return { ...state, ...idNew[0] };
    });
  }

  return posts.map((post, index) => (
    <Post key={index} id={post.id} value={post}>
      <h3>{post.title}</h3>
    </Post>
  ));
};
