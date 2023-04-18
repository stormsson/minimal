import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

res.status(200).json({
    quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in molestias animi laudantium rerum voluptatibus ut, autem asperiores velit delectus officia, perferendis laborum doloremque iusto blanditiis iste minima voluptatum quaerat.',
    });
}
