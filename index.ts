import express from 'express'
import errorHandler from './src/handlers/error.handler'
import routers from './src/routes'

const app = express()
const port = 3000 || process.env.PORT

app.use(express.json())
app.use(routers)
app.use(errorHandler.handle)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})