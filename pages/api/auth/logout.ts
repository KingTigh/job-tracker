import { serialize } from 'cookie';
export default function handler(req,res){
  res.setHeader('Set-Cookie', serialize('token', '', { path: '/', maxAge: -1 }));
  res.json({ ok: true });
}