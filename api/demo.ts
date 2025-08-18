import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.json({
    message: "Demo endpoint working!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
}
