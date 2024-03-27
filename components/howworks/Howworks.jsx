import styles from "./Howworks.module.css"
import Image from "next/image";




const Howworks = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.text1}>
                        How we work
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                    </div>
                    <div className={styles.text3}>
                        Get in touch with us
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.cont3}>
                        <div className={styles.card1}>
                            <div className="img">
                                <Image src="/pointer1.svg" width={50} height={55} alt="pointer"/>
                            </div>
                            <div className={styles.card_text1}>
                                Strategy
                            </div>
                            <div className={styles.card_text2}>
                                Euismod faucibus turpis eu gravida<br/> mi. Pellentesque et velit aliquam .
                            </div>
                        </div>
                        <div className={styles.card1}>
                            <div className="img">
                                <Image src="/pointer2.png" width={50} height={55} alt="pointer"/>
                            </div>
                            <div className={styles.card_text1}>
                                Wireframing
                            </div>
                            <div className={styles.card_text2}>
                                Euismod faucibus turpis eu gravida<br/> mi. Pellentesque et velit aliquam .
                            </div>
                        </div>
                    </div>

                    <div className={styles.cont4}>
                        <div className={styles.card1}>
                            <div className="img">
                                <Image src="/pointer3.png" width={50} height={55} alt="pointer" />
                            </div>
                            <div className={styles.card_text1}>
                                Design
                            </div>
                            <div className={styles.card_text2}>
                                Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam .
                            </div>
                        </div>
                        <div className={styles.card1}>
                            <div className="img">
                                <Image src="/pointer4.png" width={50} height={55} alt="pointer" />
                            </div>
                            <div className={styles.card_text1}>
                                Development
                            </div>
                            <div className={styles.card_text2}>
                                Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam .
                            </div>
                        </div>
                    </div>
                </div>
           </div>
            
        </div>
    )
}

export {Howworks};