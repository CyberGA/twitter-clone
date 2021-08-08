import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import topTweet from "../../assets/images/topTweet_blue.svg";
import CreateTweet from "../../components/createTweet";
import tweetFeather from "../../assets/images/tweet.svg";
import { useAuth } from "./../../providers/useAuth";
import { HOST } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPowerOff,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import DP from "./../../components/DP/index";
import toast, { Toaster } from "react-hot-toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _style from "./style.module.scss";
import { Nav, Navbar } from "react-bootstrap";

export default function Main() {
  const [tweets, setTweets] = useState([]);

  const [currentPageName, setCurrentPageName] = useState(window.location.pathname)

  const { isLoggerIn, logOut, user } = useAuth();

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

      // console.log(result.data);
      setTweets(result.data);
    } catch (error) {
      toast.error(
        "An error occurred. Check your internet connection and refresh the page",
        {
          duration: 2000,
          style: {
            fontSize: "12px",
            maxWidth: "80%",
          },
        }
      );
    }
  }



  useEffect(() => {
    // console.log(isTweetAdded);
    if (isLoggerIn) {
      getTweets();
    }
    setIsTweetAdded(false);
  }, [isLoggerIn, isTweetAdded]);

  useEffect(() => {
    
  }, [currentPageName])

  return (
    <main className={_style.main}>
      <Toaster />
      <header className={_style.header}>
        <div className={_style.titleContainer}>
          <div className={_style.picsContainer}>
            <DP src={user.profilePics} width={25} />
          </div>
          <span>Home</span>
        </div>
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

      <div className={_style.createTweetContainer}>
        <CreateTweet onTweetAdded={tweetIsAdded} />
      </div>

      {/* content username userHandle */}

      {tweets.map((tweet) => (
        <Post
          key={tweet.id}
          id={tweet.id}
          content={tweet.content}
          username={tweet.author}
          userHandle={tweet.handle}
          src={tweet.profilePics}
        />
      ))}

      <div className={_style.mobileCreateTweetBtn}>
        <img
          src={tweetFeather}
          className={_style.tweetfeatherBtn}
          alt="tweet"
        />
      </div>

      <Navbar expand="lg" fixed="bottom" className={_style.navContainerMobile}>
        <Nav className={_style.navMobile}>
          <Container fluid>
            <Row>
              <Col>
                <FontAwesomeIcon icon={faHome} />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faSearch} />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faBell} />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faEnvelope} />
              </Col>
            </Row>
          </Container>
        </Nav>
      </Navbar>
    </main>
  );
}
