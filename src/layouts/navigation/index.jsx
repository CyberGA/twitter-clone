import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import {
  faUser,
  faBookmark,
  faBell,
  faEnvelope,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";

import style from "./style.module.scss";
import Logo from "../../components/Logo";
import MiniBio from "../../components/MiniBio";
import { useState } from "react";
import defaultPics from "../../assets/images/user.png";
import tweetFeather from '../../assets/images/tweet.svg'
import { useAuth } from './../../providers/useAuth';

export default function Navigation() {
  const [docSize, setDocSize] = useState(window.innerWidth);

  const {user} = useAuth()

  window.onresize = () => {
    setDocSize(window.innerWidth);
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.navLogo}>
          <Logo width="30" heigth="30" />
        </div>
        <div className={style.navItems}>
          <ul>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faHome} />
              {docSize > 990 ? <span>Home</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faHashtag} />
              {docSize > 990 ? <span>Explore</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faBell} />
              {docSize > 990 ? <span>Notifications</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              {docSize > 990 ? <span>Messages</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faBookmark} />
              {docSize > 990 ? <span>Bookmarks</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faListAlt} />
              {docSize > 990 ? <span>Lists</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faUser} />
              {docSize > 990 ? <span>Profile</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faEllipsisH} />
              {docSize > 990 ? <span>More</span> : <></>}
            </li>
          </ul>

          {docSize > 990 ? <button className={style.tweetBtn}>Tweet</button> : <img src={tweetFeather} className={style.tweetfeatherBtn} alt="tweet" />}
          
        </div>
      </div>

      <div className={style.bio}>
        {docSize > 990 ? (
          <>
            {" "}
            <MiniBio />
            <FontAwesomeIcon icon={faEllipsisH} />
          </>
        ) : (
          <div>
            <img
              src={user.profilePics || defaultPics}
              alt="user-pics"
              className={style.dp}
            />
          </div>
        )}
      </div>
    </div>
  );
}
