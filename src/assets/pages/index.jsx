import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPost = postsData.filter((item) => item.title.includes(value));
    setPosts(filteredPost);
    setTotalPosts(filteredPost.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChangee={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
