import { Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import AppNavbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <AppNavbar />
      <Container className="text-center mt-5">
        <h1>Welcome to Job Tracker 🚀</h1>
        <p>Track your job applications, interviews, and offers in one place.</p>
        <Link href="/register"><Button variant="primary" className="m-2">Get Started</Button></Link>
        <Link href="/login"><Button variant="outline-light" className="m-2">Login</Button></Link>
      </Container>
    </>
  );
}
