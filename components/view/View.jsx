import styles from "./View.module.css"
import Image from "next/image";




const View = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.cont1_1}>
                        <div className={styles.text1}>
                            Building stellar<br/> websites for early<br/> startups
                        </div>
                        <div className={styles.text2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt.
                        </div>
                    </div>
                    <div className={styles.cont1_2}>
                        <div className={styles.btn1}>
                            <a href="#homepage">View our work</a>
                        </div>
                        <div className={styles.btn2}>
                            <a href="#homepage">View Pricing</a>
                        </div>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <Image src="/Illustration_home.svg" width={638} height={361} alt="img home"/>
                </div>
           </div>
            
        </div>
    )
}

export {View};