import React from 'react';
import styles from "./Blog.module.css";
import HeroBlog from "./HeroBlog";
import Articles from "./Articles";
import BlogArticleOne from "./BlogArticleOne";
import BlogArticleTwo from "./BlogArticleTwo";


const Blog = () => {


  return (
    <div className={styles.container}>
      <HeroBlog/>
      <BlogArticleOne/>
      <BlogArticleTwo/>
    </div>
  );
}

export default Blog;