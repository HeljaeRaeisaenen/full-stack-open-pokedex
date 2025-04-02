const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
  /* eslint-enable no-console */
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('error')
  res.send('ok')
})
