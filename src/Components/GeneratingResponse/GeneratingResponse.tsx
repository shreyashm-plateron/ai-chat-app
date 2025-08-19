import { LottieAnimation } from '../Animations';
import generatingResponseAnimation from '../../Assets/Animations/Generating_response_02.json';
import styles from './GeneratingResponse.module.scss';

export default function GeneratingResponse() {
  return (
    <div className={styles.generatingResponse}>
      <div className={styles.animationContainer}>
        <LottieAnimation animationData={generatingResponseAnimation} />
      </div>
    </div>
  );
}
