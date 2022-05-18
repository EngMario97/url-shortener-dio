import { URLController } from './controller/URLController'
import express from 'express'
import { MongoConnection } from './database/MongoConnection'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../src/swagger.json'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()

api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)


api.listen(5000, () => console.log('Express listening'))


