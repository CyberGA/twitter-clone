import React from "react";
import Logo from "../../components/Logo";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form";
import { HOST } from "../../config";
import { useAuth } from "./../../Providers/useAuth";

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

      const {msg, data} = await fetch(url, {
        method: "POST",
        body: payload,
        headers,
      }).then((e) => e.json());

      alert(msg);

      updateAuth(data.token, data.user)

      history.push("/home");
    } catch (error) {
      alert("An error occurred, please try again");
    }
  }

  return (
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
  );
}
