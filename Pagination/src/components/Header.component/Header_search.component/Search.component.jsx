import React from "react";
import style from "./Search.module.css";

export default class Search extends React.Component {
  render() {
    return (
      <div className={style.Search}>
        <span className={style.Search__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input
          type="search"
          name="search"
          id=""
          className={style.Search__searchInput}
          placeholder="Search stories by title, url or author"
        />
        <div className={style.Search__poweredBy}>
          <span>Search by</span>
          <a href="https://www.algolia.com/?utm_source=hn_search&amp;utm_medium=link&amp;utm_term=logo&amp;utm_campaign=hn_algolia" title="Reatltime Search Engine" className={style.Search__poweredAnchor}>
            <img
              className={style.Search__poweredIcon}
              src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}
