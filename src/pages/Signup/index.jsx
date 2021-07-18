import React from "react";
import Logo from "../../components/Logo";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form";
import { HOST } from "../../config";


export default function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...user, [name]: value };
    setUser(data);
  }

  async function register(formEvent) {
    formEvent.preventDefault();

    try {
      const url = HOST + "/user/register";

      const name = user.name.split(" ");

      const payload = JSON.stringify({
        firstName: name[0] ?? "-",
        lastName: name[1] ?? name[0] ?? "-",
        username: user.username,
        email: user.email,
        password: user.password,
      });

      const headers = { "Content-Type": "application/json" };

      const result = await fetch(url, {
        method: "POST",
        body: payload,
        headers,
      }).then((e) => e.json());

      alert(result.message);

     history.push("/login");
    } catch (error) {
      alert("Error occurred creating account, try again", error.message);
    }
  }

  return (
    <Form onSubmit={register} method="POST">
      <Logo width="30" height="30" />
      <Form.Title>Create Account</Form.Title>
      <Form.Input
        type="text"
        name="name"
        id="name"
        datatype="name"
        onChange={onChange}
        placeholder={`Firstname    Lastname`}
      />
      <Form.Input
        type="text"
        name="username"
        id="username"
        datatype="username"
        onChange={onChange}
        placeholder="Username"
      />
      <Form.Input
        type="email"
        name="email"
        id="email"
        datatype="email"
        onChange={onChange}
        placeholder="Email Address"
      />
      <Form.Input
        type="password"
        name="password"
        id="password"
        datatype="password"
        onChange={onChange}
        placeholder="Password"
      />

      <Form.Input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        datatype="password"
        onChange={onChange}
        placeholder="Confirm password"
      />
      {user.password !== user.confirmPassword ? (
        <strong style={{ color: "red", fontSize: "10px" }}>
          Password does not match
        </strong>
      ) : (
        ""
      )}

      <Form.Submit>Create Account</Form.Submit>

      <Form.Pane>
        <Form.Link to="/login">Already registered?</Form.Link>
        <Form.Link to="/login">Log in to account</Form.Link>
      </Form.Pane>
    </Form>
  );
}
