import { GetStaticPaths, GetStaticProps } from 'next'
import { server } from '../../config';

function BlogPost({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </div>
  )
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/api/posts`)
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/blogs/${post.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${server}/api/posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
export default BlogPost
