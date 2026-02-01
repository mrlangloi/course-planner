import styles from './Hero.module.css';
import logo from '../assets/Treehouse_Degree_Planner_white.png';

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>
                <img src={logo} alt="Degree Planner Logo" className={styles["hero-logo"]} />
                <div className={styles["hero-text-group"]}>
                    <h1>SFU CS Degree Planner</h1>
                    <h2>Plan your Computing Science Major! </h2>
                </div>
            </div>
        </section>
    );
}

export default Hero;