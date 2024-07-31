import React from 'react';
import styles from "./Article.module.css";
import HeroBlog from "./HeroBlog";
import BlogArticleOne from "./BlogArticleOne";
import BlogArticleTwo from "./BlogArticleTwo";
import HeroArticle from "./HeroArticle";


const Article = () => {


  return (
    <div className={styles.container}>
      <HeroArticle/>
    </div>
  );
}

export default Article;