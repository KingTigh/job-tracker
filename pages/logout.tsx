import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AppNavbar from '../components/Navbar';

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      await axios.get('/api/auth/logout');
      router.push('/');
    };
    logout();
  }, [router]);

  return (
    <>
      <AppNavbar />
      <div className="text-center mt-5">Logging out...</div>
    </>
  );
}
