import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  name: string,
}

function getRandomInt(max: number) {
  // const db = await myDB.connect({
  //   host: process.env.DB_HOST,
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  // })
  return Math.floor(Math.random() * Math.floor(max));
}

export default (request: NextApiRequest, response: NextApiResponse<Data>) => {
  response.status(200).json({ id: getRandomInt(999), name: 'Random Value' })
}
