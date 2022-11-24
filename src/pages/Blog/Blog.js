import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Blog = () => {
  const { title } = useContext(AuthContext);
  title("Blog");
  return <div>Blog</div>;
};

export default Blog;
