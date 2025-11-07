"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Form, Modal, Container } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [apps, setApps] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ company: '', position: '', status: 'APPLIED', notes: '' });
  const router = useRouter();

  const fetchApps = async () => {
    try {
      const res = await axios.get('/api/applications');
      setApps(res.data);
    } catch (err) {
      router.push('/login');
    }
  };

  useEffect(() => { fetchApps(); }, []);

  const submit = async () => {
    await axios.post('/api/applications', form);
    setShow(false);
    setForm({ company: '', position: '', status: 'APPLIED', notes: '' });
    fetchApps();
  };

  return (
    <>
      <AppNavbar />
      <Container className="card mt-4">
        <h2 className='cardTitle'>Job Applications</h2>
        <Button onClick={() => setShow(true)}>Add Application</Button>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a:any) => (
              <tr key={a.id}>
                <td>{a.company}</td>
                <td>{a.position}</td>
                <td>{a.status}</td>
                <td>{a.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton><Modal.Title>Add Application</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control value={form.company} onChange={e => setForm({...form, company: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control value={form.position} onChange={e => setForm({...form, position: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                <option>APPLIED</option>
                <option>INTERVIEW</option>
                <option>OFFER</option>
                <option>REJECTED</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
          <Button variant="primary" onClick={submit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
