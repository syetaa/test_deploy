import styles from "./Problems.module.css"
import Image from "next/image";

import AboutImg from "@/public/about_page.svg"



const Problems = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.text1}>
                    About us
                    </div>
                    <div className={styles.text2}>
                    Our designs solve<br/> problems
                    </div>
                    <div className={styles.text3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore magna<br/> aliqua. Ut enim ad minim veniam.
                    </div>
                </div>
                <div className={styles.cont2}>
                    <Image src={AboutImg} alt="about page"/>
                </div>
            </div>
            
        </div>
    )
}

export {Problems};