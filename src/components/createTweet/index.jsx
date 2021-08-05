import React from "react";
import tweetStyle from "./style.module.scss";
import DP from "../DP";
import { useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { HOST } from "../../config";

export default function CreateTweet({ onTweetAdded }) {
  const [post, setPost] = useState({ tweet: "" });
  const [tweetMsg, setTweetMsg] = useState("");

  const { token, user } = useAuth();

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...post, [name]: value };
    setTweetMsg(value);
    setPost(data);
  }

  function tweetInput(ev) {
    ev.target.addEventListener("input", () => {
      ev.target.style.height = "auto";
      ev.target.style.height = ev.target.scrollHeight + "px";
    });
  }

  async function sendPost() {
    if (!post.tweet) return;

    const url = HOST + "/compose/tweet";
    const payload = {
      content: post.tweet,
      author: `${user.firstName} ${user.lastName}`,
      handle: user.username,
      profilePics: user.profilePics,
    };

    const header = { "Content-Type": "application/json",};

    const result = await fetch(url, {
      method: "post",
      body: JSON.stringify(payload),
      headers: header,
    }).then((e) => e.json());

    // console.log(result.data);

    alert(result.msg);

    setTweetMsg("");
    onTweetAdded();
  }

  return (
    <div className={tweetStyle.wrapper}>
      <div className={tweetStyle.dpContainer}>
        <DP src={user.profilePics} />
      </div>
      <div className={tweetStyle.createTweet}>
        <textarea
          name="tweet"
          id="tweet"
          rows="auto"
          placeholder="What's happening?"
          onChange={onChange}
          value={tweetMsg}
          onInput={tweetInput}
        ></textarea>
        <div className={tweetStyle.createTweetsForm}>
          <div className={tweetStyle.tweetIcons}>
            <div className={tweetStyle.tweetIcon}>
              <svg
                viewBox="298.799 77.986 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className={tweetStyle.icon}
              >
                <g transform="matrix(1, 0, 0, 1, 296.798645, 75.986458)">
                  <path
                    d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
                    className={tweetStyle.iconChild}
                  />
                  <circle
                    cx="8.868"
                    cy="8.309"
                    r="1.542"
                    className={tweetStyle.iconChild}
                  />
                </g>
              </svg>
            </div>

            <div className={tweetStyle.tweetIcon}>
              <svg
                viewBox="462.177 223.08 21.5 20"
                xmlns="http://www.w3.org/2000/svg"
                className={tweetStyle.icon}
              >
                <g transform="matrix(1, 0, 0, 1, 460.927216, 221.059525)">
                  <path
                    d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"
                    className={tweetStyle.iconChild}
                  />
                  <path
                    d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"
                    className={tweetStyle.iconChild}
                  />
                </g>
              </svg>
            </div>

            <div className={tweetStyle.tweetIcon}>
              <svg
                viewBox="438.392 149.143 20.001 18.972"
                xmlns="http://www.w3.org/2000/svg"
                className={tweetStyle.icon}
              >
                <g transform="matrix(1, 0, 0, 1, 436.392059, 146.535431)">
                  <path
                    d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"
                    className={tweetStyle.iconChild}
                  />
                </g>
              </svg>
            </div>

            <div className={tweetStyle.tweetIcon}>
              <svg
                viewBox="380.959 118.692 21.5 21.5"
                xmlns="http://www.w3.org/2000/svg"
                className={tweetStyle.icon}
              >
                <g transform="matrix(1, 0, 0, 1, 379.708954, 117.44162)">
                  <path
                    d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                    className={tweetStyle.iconChild}
                  />
                  <path
                    d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"
                    className={tweetStyle.iconChild}
                  />
                  <circle
                    cx="14.738"
                    cy="9.458"
                    r="1.478"
                    className={tweetStyle.iconChild}
                  />
                  <circle
                    cx="9.262"
                    cy="9.458"
                    r="1.478"
                    className={tweetStyle.iconChild}
                  />
                </g>
              </svg>
            </div>

            <div className={tweetStyle.tweetIcon}>
              <svg
                viewBox="211.105 187.456 41.864 43.051"
                xmlns="http://www.w3.org/2000/svg"
                className={tweetStyle.icon}
              >
                <g
                  transform="matrix(0.092607, 0, 0, 0.092607, 210.511307, 187.455704)"
                  className={tweetStyle.iconChild}
                >
                  <g>
                    <path
                      d="M396.409,212.577L396.409,212.577V95.33c0-27.866-22.819-50.882-50.687-50.882h-6.313V36.5c0-19.882-16.118-36-36-36 s-36,16.118-36,36v7.948h-132V36.5c0-20.158-16.342-36.5-36.5-36.5s-36.5,16.342-36.5,36.5v7.948h-5.455 c-27.867,0-50.545,23.016-50.545,50.882v269.224c0,27.867,22.678,50.894,50.545,50.894h158.594 c26.147,31.276,64.795,49.375,105.561,49.435c75.7,0,137.365-61.677,137.365-137.379 C458.476,279.523,433.409,237.131,396.409,212.577z M287.409,36.5c-0.154-8.71,6.781-15.896,15.491-16.05 c0.14-0.002,0.28-0.003,0.42-0.002c8.792-0.093,15.996,6.959,16.089,15.752c0.001,0.1,0.001,0.2,0,0.3v38.948h-32V36.5z M82.409,36.5c0.095-8.961,7.437-16.148,16.398-16.053c0.016,0,0.031,0,0.046,0.001c8.994,0,16.556,7.059,16.556,16.052v38.948 h-33V36.5z M26.409,95.33c0-16.839,13.706-30.882,30.545-30.882h5.455v21.416c0,5.522,4.612,9.584,10.135,9.584h52.62 c5.522,0,10.245-4.062,10.245-9.584V64.448h132v21.416c-0.148,5.145,3.903,9.436,9.048,9.584c0.184,0.005,0.368,0.005,0.552,0 h52.62c5.225,0.174,9.602-3.921,9.776-9.146c0.005-0.146,0.006-0.292,0.004-0.438V64.448h6.313 c16.953,0.171,30.623,13.929,30.687,30.882v32.118h-350V95.33z M56.954,395.448c-16.839,0-30.545-14.055-30.545-30.894V147.448 h350v54.254c-17.407-7.643-36.213-11.585-55.224-11.578c-75.7,0-137.327,61.767-137.327,137.469 c-0.038,23.783,6.109,47.166,17.839,67.855L56.954,395.448z M321.109,444.705c-64.778,0-117.291-52.513-117.291-117.291 c0-64.778,52.513-117.291,117.291-117.291S438.4,262.636,438.4,327.414c0,0,0,0.001,0,0.001 C438.327,392.162,385.857,444.632,321.109,444.705z"
                      className={tweetStyle.iconChild}
                    />
                  </g>
                </g>
                <g
                  transform="matrix(0.092607, 0, 0, 0.092607, 210.511307, 187.455704)"
                  className={tweetStyle.iconChild}
                >
                  <g>
                    <path
                      d="M368.219,327.448h-43.81v-60.17c0-5.523-4.477-10-10-10c-5.523,0-10,4.477-10,10v70.16 c0.088,5.561,4.626,10.02,10.188,10.01h53.622c5.523,0,10-4.477,10-10C378.219,331.925,373.742,327.448,368.219,327.448z"
                      className={tweetStyle.iconChild}
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <button
            className={tweetStyle.tweetBtn}
            type="submit"
            onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
