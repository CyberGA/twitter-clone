import React from "react";
import style from "./style.module.scss";

export default function FooterContainer({ ...props }) {
  return (
    <footer {...props}>
      <div className={style.misc}>
        <div>About</div>
        <div>Help Center</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div>Cookie Policy</div>
        <div>Ads info</div>
        <div>Blog</div>
        <div>Status</div>
        <div>Careers</div>
        <div>Brand Resources</div>
        <div>Advertising</div>
        <div>Marketing</div>
        <div>Twitter for Business</div>
        <div>Developers</div>
        <div>Directory</div>
        <div>Setting</div>
      </div>
      <div className={style.copywrite}>&copy 2021 Twitter, Inc</div>
    </footer>
  );
}
