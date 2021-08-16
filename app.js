import express from 'express'

const app = express()

app.use(express.json())
app.post('/users', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.sendStatus(400)
      return
    }
  
    res.sendStatus(200)
})

export default app