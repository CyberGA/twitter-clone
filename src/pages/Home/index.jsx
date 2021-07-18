import React from "react";
import style from "./style.module.scss";
import Main from "../../layouts/Main";
import Navigation from "../../layouts/navigation";
import Sidebar from "../../layouts/sidebar";

export default function Home() {

  return (
    <>
        {/* <Route exact path="/home/tweet/comment">
          <div className={style.comment}>
            <div className={style.commentWrapper}>
              <Post />
            </div>
          </div>
        </Route> */}


        <div className={style.container}>
          <Navigation />
          <Main />
          <Sidebar />
        </div>
    </>
  );
}
