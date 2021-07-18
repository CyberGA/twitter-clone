import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Form({ children, ...props }) {
  return (
    <form {...props} className={style.form}>
      {children}
    </form>
  );
}

Form.Input = function FormInput({ ...props }) {
  return <input className={style.form} required {...props} />;
};
Form.Title = function FormTitle({ children, ...props }) {
  return (
    <h1 className={style.title} {...props}>
      {children}
    </h1>
  );
};
Form.Pane = function FormPane({ children, ...props }) {
  return (
    <div className={style.lastSection} {...props}>
      {" "}
      {children}{" "}
    </div>
  );
};
Form.Link = function FormLink({ children, ...props }) {
  return (
    <Link className={style.link} {...props}>
      {children}
    </Link>
  );
};
Form.Submit = function FormSubmit({ children, ...props }) {
  return <button type="submit">{children}</button>;
};
