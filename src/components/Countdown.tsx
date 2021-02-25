import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Coutdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Coutdown() {

    const { startNewChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCoutdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout =  setTimeout(() => {
                setTime(time-1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false);
            startNewChallenge();
        }

    },[isActive, time])

    return (
        <div>
            <div className={styles.coutdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.coutdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}
                            onClick={resetCoutdown}
                        >
                            Abandornar ciclo
                        </button>

                    ) : (
                        <button 
                            type="button" 
                            className={styles.coutdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

            


        </div>
    )
}