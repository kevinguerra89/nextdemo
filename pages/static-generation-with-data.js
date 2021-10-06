/* Static Generation with Data */
/* static-generation-with-data */

import Head from 'next/head'
import UserCard from 'components/UserCard'

function StaticGenerationwithData ({ user }) {
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

export async function getStaticProps (context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await res.json()

  return {
    props: {
      user: data
    }
  }
}

export default StaticGenerationwithData
