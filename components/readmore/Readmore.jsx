import styles from "./Readmore.module.css"
import Image from "next/image";




const Readmore = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text1}>
                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the<br/> stars had ceased to twinkle. By the same illusion which lifts the horizon of the<br/> sea to the level of the spectator on a hillside.
                </div>
                <div className={styles.text2}>
                    Read more
                </div>
           </div>
            
        </div>
    )
}

export {Readmore};