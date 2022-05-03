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
  function exibePost() {
    posts.forEach((post) => {
      if (post.id === postAtivo) {
        console.log(post);
        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      }
    });
  }

  return <ManualContent>{exibePost()}</ManualContent>;
};
