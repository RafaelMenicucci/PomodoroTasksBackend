import express from 'express'

const app = express()

import pg from 'pg'
const { Pool } = pg
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json())
app.post('/users', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.sendStatus(400)
      return
    }
  
    res.sendStatus(200)
})

app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT description FROM tasks');
        const results = { 'results': (result) ? result.rows : null};
        res.send( results );
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
})

export default app