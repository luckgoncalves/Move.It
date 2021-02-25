import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExpirenceBar.module.css';

export function ExpirenceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)

    const percentToNextLeve = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.expirenceBar}> 
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLeve}%`}} />
                <span className={styles.currentExpirence} style={{left: `${percentToNextLeve}%`}}>
                    {currentExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}