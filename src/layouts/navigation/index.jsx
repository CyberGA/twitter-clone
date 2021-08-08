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

  const size = 1281;

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
              {docSize > size ? <span>Home</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faHashtag} />
              {docSize > size ? <span>Explore</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faBell} />
              {docSize > size ? <span>Notifications</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              {docSize > size ? <span>Messages</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faBookmark} />
              {docSize > size ? <span>Bookmarks</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faListAlt} />
              {docSize > size ? <span>Lists</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faUser} />
              {docSize > size ? <span>Profile</span> : <></>}
            </li>
            <li className={style.navItem}>
              <FontAwesomeIcon icon={faEllipsisH} />
              {docSize > size ? <span>More</span> : <></>}
            </li>
          </ul>

          {docSize > size ? <button className={style.tweetBtn}>Tweet</button> : <img src={tweetFeather} className={style.tweetfeatherBtn} alt="tweet" />}
          
        </div>
      </div>

      <div className={style.bio}>
        {docSize > size ? (
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
