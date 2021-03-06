import { GetStaticProps } from 'next'
import Link from 'next/link'

import { server } from '../../config';

function BlogPosts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blogs/${encodeURIComponent(post.id)}`}>
            <a>{post.title}</a>
          </Link>
          <p>{post.text}</p>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/api/posts`)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
export default BlogPosts
