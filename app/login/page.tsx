import SolarLogo from '@/app/ui/solar-logo';
import LoginForm from '@/app/ui/login-form';
import styles from '@/app/ui/home.module.css';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative justify-center mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 width:100%">
          <div className={styles.width}>
            <SolarLogo />
          </div>
        <LoginForm />
      </div>
    </main>
  );
}