import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  product: {
    name: string;
    title: string;
    description: string;
    price: number;
    oldPrice: number;
    image: string; // src
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    product: {
      name: "Vans",
      title: "Vans",
      description: "the best shoes available",
      price: 50,
      oldPrice: 100,
      image: '/assets/pexels-madvortex-9214286.jpg' // src
} })
}

