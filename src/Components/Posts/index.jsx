import styled from "styled-components";
import posts from "../../api/posts";

const Post = styled.div`
  align-items: center;
  background-color: #5bcfd3;
  border-bottom: 1px solid #11999e;
  color: #02416d;
  cursor: pointer;
  display: flex;
  font-family: inter;
  font-size: 1vw;
  font-weight: 400;
  height: 3.5vw;
  max-width: 250px;
  padding: 0 0 0 1rem;
  text-align: left;
  width: 15.62vw;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ setPostAtivo, postAtivo }) => {
  //  useEffect(() => {
  //    window.addEventListener("click", handleClick);
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, []);

  function handleClick(e) {
    e.stopPropagation();
    selecionaPost(e.target.id);
  }

  function selecionaPost(postId) {
    posts.forEach((post) => {
      if (post.id == postId) {
        setPostAtivo(post);
      }
    });
  }

  return posts.map((post, index) => (
    <Post onClick={handleClick} key={index} id={post.id} value={post}>
      {post.title}
    </Post>
  ));
};
