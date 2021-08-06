import React from "react";
import Logo from "../../components/Logo";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form";
import { HOST } from "../../config";
import { useAuth } from "./../../providers/useAuth";
// import { ToastProvider, useToasts } from 'react-toast-notifications';
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const history = useHistory();
  const { updateAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...credentials, [name]: value };
    setCredentials(data);
  }

  async function login(ev) {
    ev.preventDefault();

    try {
      const url = HOST + "/user/login";

      const payload = JSON.stringify({
        ...credentials,
      });

      const headers = { "Content-Type": "application/json" };

      const response = async () => {
        const { msg, data } = await fetch(url, {
          method: "POST",
          body: payload,
          headers,
        }).then((e) => e.json());


        updateAuth(data.token, data.user)

        setTimeout(() => history.push("/home"), 1500)
        return { msg, data };
      };

      toast.promise(response(), {
        loading: "Signing you to your account",
        success: (data) => data.msg,
        error: "incorrect username or password",
      },
      {
        style: {
          minWidth: '250px',
          animation: "ease-in-out"
        },
        error: {
          duration: 1500,
        },
        
      });

      // const {msg, data} = await fetch(url, {
      //   method: "POST",
      //   body: payload,
      //   headers,
      // }).then((e) => e.json());

      // alert(msg);

      // updateAuth(data.token, data.user)

      // history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Toaster />
      <Form onSubmit={login} method="POST">
        <Logo width="30" height="30" />
        <Form.Title>Log in to Twitter</Form.Title>
        <Form.Input
          type="text"
          name="username"
          id="username"
          datatype="username"
          onChange={onChange}
          placeholder="Phone, email, username"
        />
        <Form.Input
          type="password"
          name="password"
          id="password"
          datatype="password"
          onChange={onChange}
          placeholder="Password"
        />

        <Form.Submit>Log in</Form.Submit>

        <Form.Pane>
          <Form.Link to="#">Forgot password?</Form.Link>
          <Form.Link to="/signup">Sign up for Twitter</Form.Link>
        </Form.Pane>
      </Form>
    </>
  );
}
