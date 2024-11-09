import { useEffect } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { auth } from '../../config/firebase';
import { LoginForm } from './LoginForm';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  if (!user) {
    return <LoginForm />;
  }

  return <>{children}</>;
}