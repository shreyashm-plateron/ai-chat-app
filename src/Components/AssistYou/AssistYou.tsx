import { LottieAnimation } from '../Animations';
import assistYouAnimation from '../../Assets/Animations/Assist you_11 without BG.json';
import styles from './AssistYou.module.scss';

export default function AssistYou() {
  return (
    <div className={styles.assistYou}>
      <div className={styles.animationBox}>
        <LottieAnimation animationData={assistYouAnimation} />
      </div>
    </div>
  );
}
