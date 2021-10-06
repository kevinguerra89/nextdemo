/* Page Path Depends on External Data */
/* page-path-depends-on-external-data */

import Head from 'next/head'
import UserCard from 'components/UserCard'

function PagePathDependsonExternalData ({ user }) {
  return (
    <div>
      <Head>
        <title>User</title>
        <meta name="description" content="" />
      </Head>

      <UserCard name={user.name} userName={user.username} avatar="https://picsum.photos/130/130?image=1027"/>
    </div>
  )
}

export async function getStaticPaths () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((user) => ({
    params: { id: user }
  }))

  return {
    paths,
    fallback: false
  }
}

export default PagePathDependsonExternalData
