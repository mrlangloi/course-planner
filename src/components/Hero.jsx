import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>
                <h1>SFU CS Degree Planner</h1>
                <h2>Plan your Computing Science Major! </h2>
            </div>
        </section>
    );
}

export default Hero;