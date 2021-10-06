export default async function handler (req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        const data = await response.json()
        res.status(200).json({ success: true, data: data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
