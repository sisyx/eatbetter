import { CSSProperties } from "react";
import styles from "./ThreeDotsLoader.module.css";

type PropsType = {
    dotSize: number,
}

export const ThreeDotsLoader = ({ dotSize }: PropsType) => {

    const boxStyles: CSSProperties = {
        width: `${dotSize}px`,
        backgroundColor: "#000",
        height: `${dotSize}px`,
    }

    return (
        <div className={styles.container}>
            <div style={boxStyles} className={styles.box}></div>
            <div style={boxStyles} className={styles.box}></div>
            <div style={boxStyles} className={styles.box}></div>
        </div>
    );
}
