import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
function useProfile() {
  const { data, error } = useSWR('/api/profile', fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

function Profile() {
  const { data, isLoading, isError } = useProfile()

  if (isLoading) return <div>loading...</div>
  if (!data) return <div>failed to load</div>
  return <div>hello {data.name}!</div>
}

export default Profile