import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import _style from "./style.module.scss";
import CreateTweet from "./../../components/createTweet/index";
import { Link } from 'react-router-dom';

export default function ComposeTweet() {
  return (
    <Container fluid className={_style.createTweetContainer}>
        <div className={_style.createTweetHeader}>
          <Link to="/home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      <CreateTweet createTweetPage />
    </Container>
  );
}
