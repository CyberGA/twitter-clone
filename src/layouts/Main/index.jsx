import React, { useState, useEffect } from "react";

import _style from "./style.module.scss";
import Post from "../../components/Post/Post";
import topTweet from "../../assets/images/topTweet_blue.svg";
import CreateTweet from "../../components/createTweet";
import { useAuth } from "./../../Providers/useAuth";
import { HOST } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [tweets, setTweets] = useState([]);

  const { isLoggerIn, logOut } = useAuth();

  const [isTweetAdded, setIsTweetAdded] = useState(false);

  function tweetIsAdded() {
    setIsTweetAdded(true);
  }

  async function getTweets() {
    try {
      const url = HOST + "/show/tweets";
      // const payload = { isUserLoggedIn: loggedIn };

      // const header = {
      //   "Content-Type": "application/json",
      // };

      const result = await fetch(url).then((e) => e.json());

      console.log(result.data);
      setTweets(result.data);
    } catch (error) {
      console.log("An error occurred, try again");
    }
  }

  useEffect(() => {
    console.log(isTweetAdded);
    if (isLoggerIn) {
      getTweets();
    }
    setIsTweetAdded(false)
  }, [isLoggerIn, isTweetAdded]);

  return (
    <main className={_style.main}>
      <header className={_style.header}>
        <span>Home</span>
        <div className={_style.headerIcon}>
          <img
            src={topTweet}
            className={_style.topTweets}
            alt="Top Tweets"
            title="Top Tweets"
          />
          <div className={_style.logoutBtn} onClick={logOut}>
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
        </div>
      </header>
      <div className={_style.postContainer}>
        <CreateTweet onTweetAdded={tweetIsAdded} />

        {/* content username userHandle */}

        {tweets.map((tweet) => (
          <Post
            key={tweet.id}
            content={tweet.content}
            username={tweet.author}
            userHandle={tweet.handle} src={tweet.profilePics}
          />
        ))}
      </div>
    </main>
  );
}
