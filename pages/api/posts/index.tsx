import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  title: string,
  text: string,
}

export default (request: NextApiRequest, response: NextApiResponse<Data[]>) => {
  response.status(200).json([
    { id: 1, title: 'John Doe', text: 'Long Text Here' },
    { id: 2, title: 'Second Title', text: 'Long Text Here And More Biggest' },
  ])
}
