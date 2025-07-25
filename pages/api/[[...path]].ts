import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query
  res.status(200).json({ name: `Path: ${path}` })
}
