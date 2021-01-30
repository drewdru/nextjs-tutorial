import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  name: string,
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default (request: NextApiRequest, response: NextApiResponse<Data>) => {
  response.status(200).json({ id: getRandomInt(999), name: 'Random Value' })
}
