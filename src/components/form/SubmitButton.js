import React from "react";
import styles from "./SubmitButton.module.css";

function SubmitButton({ text, onClick }) {
    return (
        <button className={styles.btn} type="submit" onClick={onClick}>
            {text}
        </button>
    );
}

export default SubmitButton;