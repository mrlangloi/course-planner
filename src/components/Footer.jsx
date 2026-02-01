import styles from "./Footer.module.css";

const Footer = () => {

    return (
        <footer id="footer" className={styles["footer-section"]}>
            <div className={styles["footer-content"]}>
                <p>
                    Created with <a className={styles["footer-links"]} href="https://www.react.dev/" target="_blank" rel="noopener noreferrer">React v19.2.0</a> and <a className={styles["footer-links"]} href="https://www.vite.dev/" target="_blank" rel="noopener noreferrer">Vite v7.2.4</a>
                </p>
                <p>
                    Icons by <a className={styles["footer-links"]} href="https://www.fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a> and <a className={styles["footer-links"]} href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">FlatIcon</a>
                </p>
                <p>
                    Header images by <a className={styles["footer-links"]} href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>
                </p>
                <p>
                    &copy; 2026, Ricky Cheung
                </p>
            </div>
        </footer>
    );
};

export default Footer;