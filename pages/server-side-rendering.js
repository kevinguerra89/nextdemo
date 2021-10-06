/* Server-side Rendering */
/* server-side-rendering */

import Head from 'next/head'
import UserCard from 'components/UserCard'
import jsHttpCookie from 'cookie'

function ServersideRendering ({ user }) {
  return (
    <>
      <Head>
        <title>User</title>
        <meta name="description" content="" />
      </Head>

      <UserCard name={user.name} userName={user.username} avatar="https://picsum.photos/130/130?image=1027"/>
    </>
  )
}

export async function getServerSideProps (context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await res.json()

  // GET COOKIE
  const { req } = context
  if (req && req.headers) {
    const cookies = req.headers.cookie
    if (typeof cookies === 'string') {
      const cookiesJSON = jsHttpCookie.parse(cookies)
      console.log(cookiesJSON.token)
    }
  }

  return {
    props: {
      user: data
    }
  }
}

export default ServersideRendering
