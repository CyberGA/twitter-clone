import { Redirect } from "react-router-dom";
import { useAuth } from "../Providers/useAuth";

export default function Guard(props) {
  const { isLoggerIn } = useAuth();

  console.log(window.location.href, " Is Logged In: ", isLoggerIn);

  if (isLoggerIn === null) {
    return <Redirect to="/" />;
  }

  if (!isLoggerIn) {
    return <Redirect to="/login" />;
  }

  return <>{props.children}</>;
}
