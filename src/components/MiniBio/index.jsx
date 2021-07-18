import React from "react";
import scssStyle from "./style.module.scss";
import defaultPics from "../../assets/images/user.png";
import { useAuth } from './../../Providers/useAuth';

export default function MiniBio({ ...props }) {

  const {isLoggerIn, user} = useAuth()
  
  return (
    <div className={scssStyle.profileSpan}>
      <img src={props.src || user.profilePics || defaultPics} alt="user-pics" />
      <div
        className={scssStyle.userDetails}
        style={{flexDirection: props.direction || "column" }}
      >
        <span className={scssStyle.username}>{ (isLoggerIn) ? `${user.firstName} ${user.lastName}` : " "}</span>
        <span className={scssStyle.userHandle}>{(isLoggerIn) ? "@" + user.username : ""}</span>
      </div>
    </div>
  );
}
