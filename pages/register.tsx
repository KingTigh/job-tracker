"use client";
import { useState } from 'react';
import axios from '../utils/axios';
import { useRouter } from 'next/router';
import { Form, Button, Container } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { email, password, name: email.split('@')[0]}, {withCredentials: true});
      router.push('/dashboard');
    } catch (err: any) {
      console.log(err?.respone?.data || err);
      alert('Registration failed');
    }
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-5 card">
        <h2>Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button type="submit" variant="primary">Register</Button>
        </Form>
      </Container>
    </>
  );
}
