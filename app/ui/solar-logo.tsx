
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';

export default function SolarLogo() {
  return (
    <Image
    src="/logo.png"
    width={250}
    height={250}
    className={styles.logo}
    alt="Screenshots of the dashboard project showing desktop version"
  />
  );
}
