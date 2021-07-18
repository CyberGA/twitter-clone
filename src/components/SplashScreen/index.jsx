import Logo from "../../components/Logo";
import splashStyle from "./splash_screen.module.scss";

export default function SplashScreen(props) {
  return (
    <div className={splashStyle.container} style={{ display: props.display}} >
      <Logo />
    </div>
  );
}
