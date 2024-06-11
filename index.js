const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

const compression = require('compression')
const helmet = require('helmet')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

const { dbConnection } = require('./config/config')
const routes = require('./routes')

app.use(compression())
app.use(helmet())

app.use(express.json())

app.use('/', routes)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.get('/ping', (req, res) => {
	res.json({ message: 'pong' })
})



dbConnection()

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))