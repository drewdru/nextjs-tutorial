import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  title: string,
  text: string,
}

const data: Data[] = [
  { id: 1, title: 'John Doe', text: 'Long Text Here' },
  { id: 2, title: 'Second Title', text: 'Long Text Here And More Biggest' },
]

export default (request: NextApiRequest, response: NextApiResponse<Data>) => {
  const {
    query: { id },
  } = request
  response.status(200).json(data.find(x => x.id == Number(id)))
}
