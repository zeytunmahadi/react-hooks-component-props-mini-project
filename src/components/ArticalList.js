import React from "react";
import Article from "./Artical";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date || "January 1, 1970"} 
          preview={post.preview} 
        //   minutes={post.minutes || 0} 
        />
      ))}
    </main>
  );
}

export default ArticleList;