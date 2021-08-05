import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Post.module.scss";
import { faEllipsisH, faHeart } from "@fortawesome/free-solid-svg-icons";
import DP from "./../DP/index";
import { useAuth } from "./../../providers/useAuth";
import { HOST } from "./../../config";

export default function Post({ ...props }) {
  const {
    user: { username },
  } = useAuth();

  // const [isLiked, setIsLiked] = useState(false);

  async function like() {
    const url = HOST + "/tweet/like";

    const payload = { userId: username, postId: props.id };

    const header = { "Content-Type": "application/json" };

    await fetch(url, {
      method: "post",
      body: JSON.stringify(payload),
      headers: header,
    }).then((e) => e.json());

    // if (resData.msg === "success") setIsLiked(!isLiked);
  }

  async function checkIfLiked() {
    const url = HOST + "/tweet/islike";

    const payload = { userId: username, postId: props.id };

    const header = { "Content-Type": "application/json" };

    const resData = await fetch(url, {
      method: "get",
      body: JSON.stringify(payload),
      headers: header,
    }).then((e) => e.json());

    if (resData.msg === "success") return resData.data;
  }

  return (
    <>
      <div className={style["post-wrapper"]}>
        {/* Post Bio */}
        <DP src={props.src} />

        <div className={style.bioContainer}>
          <div className={style.profileSpan}>
            <FontAwesomeIcon icon={faEllipsisH} />
            <div className={style.userDetails}>
              <span className={style.username}>{props.username}</span>
              <span className={style.userHandle}>{"@" + props.userHandle}</span>
            </div>
          </div>

          <div className={style.post_content}>
            <p className={style.post_body}>{props.content}</p>

            <div className={style.post_utils}>
              <div className={`${style.postIcons} ${style.commentIcon}`}>
                <svg
                  viewBox="112.798 169.482 19.75 19.75"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.icon}
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 110.702431, 167.250015)"
                    className={style.iconChild}
                  >
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                  </g>
                </svg>
              </div>

              <div className={`${style.postIcons} ${style.retweetIcon}`}>
                <svg
                  viewBox="118.298 66.175 23.979 16.551"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.icon}
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 118.286644, 62.27533)"
                    className={style.iconChild}
                  >
                    <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                  </g>
                </svg>
              </div>

              <div
                className={`${style.postIcons} ${style.likeIcon}`}
                onClick={like}
                onLoad={checkIfLiked}
              >
                {!checkIfLiked ? (
                  <svg
                    viewBox="281.829 193.589 20.098 18.914"
                    xmlns="http://www.w3.org/2000/svg"
                    className={style.icon}
                  >
                    <g
                      transform="matrix(1, 0, 0, 1, 279.87915, 190.864685)"
                      className={style.iconChild}
                    >
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                    </g>
                  </svg>
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={style.likeIconFilled}
                  />
                )}
              </div>

              <div className={`${style.postIcons} ${style.shareIcon}`}>
                <svg
                  viewBox="424.01 182.2 20 19.694"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.icon}
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 422.010132, 179.950241)"
                    className={style.iconChild}
                  >
                    <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                    <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
