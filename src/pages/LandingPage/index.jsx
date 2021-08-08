import React, { useEffect } from "react";
import Logo from "../../components/Logo";
import style from "./style.module.scss";
import whiteTwitterLogo from "../../assets/images/twitter-white.svg";
import FormEntry from "../../components/FormEntry/index";
import FooterContainer from "../../layouts/Footer";
import { useHistory } from "react-router-dom";
import { useAuth } from "./../../providers/useAuth";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import SplashScreen from "../../components/SplashScreen/index";

export default function LandingPage() {
  const history = useHistory();
  // const [splashDisp, setSplashDisp] = useState("flex");

  const { isLoggerIn } = useAuth();

  // const changeSplashdisp = () => {
  //   window.onload = () => setSplashDisp("none");
  // }

  // if(!isLoggerIn) {
  //   changeSplashdisp()
  // }

  useEffect(() => {
    if (isLoggerIn) {
      history.push("/home");
    }
  }, [history, isLoggerIn]);

  function BtnClicked(ev) {
    const path = ev.target.textContent.toLowerCase();
    // console.log(path);
    history.push(`/${path}`);
  }

  return (
    <>
      {/* <SplashScreen display={splashDisp} /> */}
      <Container fluid className={style.wrapper}>
        <Row className={style.poster}>
          <Col className={style.container} xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <div className={style.magazine}>
              <Logo src={whiteTwitterLogo} width="150" height="150" />
            </div>
          </Col>
          <Col className={style.container} xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} md={{span: 6, order: 1}}>
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
          </Col>
        </Row>
        <Row className={style.footer}>
          <FooterContainer className={style.footer} />
        </Row>
      </Container>
    </>
  );
}
