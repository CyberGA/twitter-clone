import React from 'react'
import defaultPics from "../../assets/images/user.png";
import dpStyles from './style.module.scss'

export default function DP({...props}) {
    return (
        <div>
            <img src={props.src || defaultPics} alt="user-pics" className={dpStyles.dp} />
        </div>
    )
}
