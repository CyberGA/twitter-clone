import React from 'react'
import CShareIconStyle from './style.module.scss'

export default function CustomIcon(props) {
    return (
        <div className={CShareIconStyle.container}>
            <img src={props.pics} alt="share Icon" className={CShareIconStyle.icon}/>
        </div>
    )
}
