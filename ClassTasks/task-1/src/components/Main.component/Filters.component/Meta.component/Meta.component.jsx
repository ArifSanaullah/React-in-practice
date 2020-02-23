import React from "react";
import style from "./Meta.module.css";

const socialMediaList = [
  {
    name: "Share on Twitter",
    src: "https://img.icons8.com/android/24/000000/twitter.png"
  },
  {
    name: "Share on Facebook",
    src: "https://img.icons8.com/metro/24/000000/facebook-new.png"
  },
  {
    name: "Share via Email",
    src: "https://img.icons8.com/metro/26/000000/email.png"
  }
];

export default class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialListShown: false
    };
    this.shareButton = this.shareButton.bind(this);
  }

  shareButton() {
    this.setState(prevState => {
      const prevProps = { ...prevState };
      const prevVisibility = prevProps.socialListShown;
      delete prevProps.socialListShown;
      return { ...prevProps, socialListShown: !prevVisibility };
    });
  }

  render() {
    return (
      <div className={style.Meta}>
        <p className={style.processingTime}>
          20,184,406 results (0.009 seconds)
        </p>
        <div className={style.socialShare}>
          <label htmlFor="socialShare" onClick={this.shareButton}>
            <svg
              className={style.socialShare}
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
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </label>
        </div>
        <ul
          className={`${
            this.state.socialListShown
              ? style.socialMediaListAnimated
              : style.socialMediaList
          }`}
        >
          {socialMediaList.map((item, index) => {
            return (
              <li className={style.socialItem} key={index}>
                <button className={style.socialButton}>
                  <p>{item.name}</p>
                  <img src={item.src} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
