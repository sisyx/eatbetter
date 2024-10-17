
import styles from "./AnimatedBackground2.module.css"
export default function AnimatedBackground2({ bg = undefined, fixed = false }) {
  return (
    <div className={`${styles.outer} ${fixed ? "fixed" : "absolute"}`}>
        <div className={`${styles.hero} ${!bg ? styles.has_bg : ""}`} style={!!bg ? {backgroundColor: bg} : {}}> 
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        </div>
    </div>
  )
}