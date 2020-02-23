import React from "react";
import style from "./SearchResults.module.css";
import posts from "../../../data";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className={style.searchResults}>
        <div className={style.searchResultsContainer}>
          {posts.map(post => {
            return (
              <article className={style.story}>
                <div className={style.storyContainer}>
                  <div className={style.storyData}>
                    <div className={style.storyTitle}>
                      <span>
                        <span>{post.title}</span>
                      </span>
                      <a className={style.storyLink} href={post.source}>
                        {post.source}
                      </a>
                    </div>
                    <div className={style.storyMeta}>
                      <span>{post.points}</span>
                      <span>{post.username}</span>
                      <span>{post.postedOn}</span>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
