import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";

const Header = () => {
    return(
        <div>
            <div id="homepage" className={styles.textmain}>
                <div className={styles.logo}>
                    <Image src="/Logo.svg" width={122} height={25} alt="logo1"/>
                </div>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                </div>
                <div className={styles.btns}>
                    <a className={styles.get} href="#homepage">Contact us</a>
                </div>
            </div>
            
        </div>
    )
}

export {Header};