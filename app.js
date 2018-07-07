const express = require('express')
const parser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(parser.json())
app.use(morgan('dev'))
app.disable('x-powered-by')






const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)
module.exports = app
