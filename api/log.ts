import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { action } = req.body;

    if (!action) {
      return res.status(400).json({ error: 'Action is required' });
    }

    console.log(`[LOG] ${new Date().toISOString()} - ${action}`);

    return res.status(200).json({ message: 'Action logged successfully' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: 'Method Not Allowed' });
}
