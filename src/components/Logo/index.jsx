import React from "react";
import twitterLogo from "../../assets/images/twitter.svg";
import logoStyle from './logo.module.scss'

export default function Logo({ ...props }) {
  return (
    <div className={logoStyle.container}>
      <img
        {...props}
        src={props.src || twitterLogo}
        width={props.width || "100"}
        alt="twitter logo"
      />
    </div>
  );
}
