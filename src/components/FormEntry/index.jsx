import React from "react";
import style from "./style.module.scss";

export default function FormEntry({ props, children }) {
  return <div className={style.container}>{children}</div>;
}
FormEntry.Title = function FormEntryTitle({ children, ...props }) {
  return <h1 className={style.title}>{children}</h1>;
};
FormEntry.Text = function FormEntryText({ children, ...props }) {
  return (
    <p {...props} className={style.text}>
      {children}
    </p>
  );
};
