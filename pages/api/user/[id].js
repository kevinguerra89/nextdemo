function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default async function handler (req, res) {
  const { method, query: { id } } = req

  if (method === 'GET') {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      await sleep(1000)

      if (!data) {
        return res.status(404).json({ sucess: false })
      }

      return res.json({ sucess: true, data: data })
    } catch (error) {
      return res.status(404).json({ sucess: false })
    }
  } else {
    return res.status(500).json({ sucess: false, error: 'Falla del servidor' })
  }
}
