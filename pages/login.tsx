import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Form, Button, Container } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { email, password });
      router.push('/dashboard');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-5 card">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button type="submit" variant="primary">Login</Button>
        </Form>
      </Container>
    </>
  );
}
