import { GetServerSideProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import { server } from '../config';

function SsrPage({ data }) {
  return (
    <div>
      <h3>{data.id}</h3>
      <p>{data.name}</p>
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`${server}/api/data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default SsrPage
