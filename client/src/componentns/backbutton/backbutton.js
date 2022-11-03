import React from "react";
import styles from './backbutton.module.scss'
import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate()
   const historyIndex = window.history.state?.idx;



if(historyIndex > 0 ){
    return(
        <button className={styles.back_button} onClick={() => { navigate(-1) }} >Go back</button>
    )
}

return null;
}

export default BackButton;