import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>
                <h1>Hi, I'm Ricky!</h1>
                <h2>I am a 3rd-year Computing Science SoSy Student @ SFU.</h2>
                <h2>I have a knack for building applications and troubleshooting technical issues.</h2>
            </div>
        </section>
    );
}

export default Hero;