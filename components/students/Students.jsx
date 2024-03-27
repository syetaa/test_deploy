import styles from "./Students.module.css"
import Image from "next/image";




const Students = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.text1}>
                    A UX Case Study on Creating a<br/> Studious Environment for Students
                    </div>
                    <div className={styles.text2}>
                    Andrew Jonson Posted on 27th January 2021
                    </div>
                    <div className={styles.text3}>

                    </div>
                </div>
                <div className={styles.cont2}>
                    <Image src="/blog_page.png" width={1280} height={477} alt="blog page"/>
                </div>
           </div>
            
        </div>
    )
}

export {Students};