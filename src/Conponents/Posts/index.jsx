import styled from "styled-components";
import posts from "../../api/posts";

const Post = styled.div`
  width: 15.62vw;
  max-width: 250px;
  height: 3vw;
  background-color: #5bcfd3;
  text-align: left;
  padding: 0 0 0 1rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: inter;
  color: #02416d;
  cursor: pointer;
  border-bottom: 1px solid #11999e;
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
