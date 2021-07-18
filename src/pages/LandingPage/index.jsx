import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import style from "./style.module.scss";
import whiteTwitterLogo from "../../assets/images/twitter-white.svg";
import FormEntry from "../../components/FormEntry/index";
import FooterContainer from "../../layouts/Footer";
import { useHistory } from "react-router-dom";
import { useAuth } from "./../../Providers/useAuth";
import SplashScreen from "../../components/SplashScreen/index";

export default function LandingPage() {
  const history = useHistory();
  const [splashDisp, setSplashDisp] = useState("flex");

  const { isLoggerIn } = useAuth();

  const changeSplashdisp = () => {
    setTimeout(() => {
      setSplashDisp("none");
    }, 2500);
  }

  if(!isLoggerIn) {
    changeSplashdisp()
  }

  useEffect(() => {
    if (isLoggerIn) {
      history.push("/home");
    }

  }, [history, isLoggerIn]);

  function BtnClicked(ev) {
    const path = ev.target.textContent.toLowerCase();
    console.log(path);
    history.push(`/${path}`);
  }

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
  })

  return (
    <>
      
      <SplashScreen display={splashDisp} />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.magazine}>
            <Logo src={whiteTwitterLogo} width="250" height="250" />
          </div>

          <FormEntry>
            <Logo width="30" height="30" />
            <FormEntry.Title>Happening Now</FormEntry.Title>
            <FormEntry.Text>Join Twitter today.</FormEntry.Text>

            <div className={style.pane}>
              <div className={style.signupFrame} onClick={BtnClicked}>
                Signup
              </div>
              <div className={style.loginFrame} onClick={BtnClicked}>
                Login
              </div>
            </div>
          </FormEntry>
        </div>
        <FooterContainer className={style.footer} />
      </div>
    </>
  );
}
