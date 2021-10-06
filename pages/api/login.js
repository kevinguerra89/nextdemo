import cookie from 'cookie'
import { sign } from 'jsonwebtoken'

export default async function handler (req, res) {
  const { method, body: { username, password } } = req
  if (method === 'POST') {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await response.json()

    if (!data) {
      return res.status(404).json({ sucess: false })
    }

    const user = data.find(u => u.username === username)

    if (!user || password !== 'test') {
      res.json({ message: 'Ups, something went wrong!' })
    }

    const claims = { sub: user.id, username: user.username }
    const jwt = sign(claims, 'd17e5713-c4c3-460c-9c7b-e663f7ef0123', { expiresIn: '1h' })

    res.setHeader('Set-Cookie', cookie.serialize('token', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/'
    }))
    res.statusCode = 200
    res.json({ success: true })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}
