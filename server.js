// IMPORTS
const dotenv = require('dotenv').config()
const fastify = require('fastify')({ logger: true })
import { connect } from 'mongoose'


// PRESETS
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/',
    swagger: {
        info: { title: 'blog-api' }
    }
})
fastify.decorate('isLoggedIn', {
    isAuth: false,
    email: ''
})


// ROUTES
fastify.register(require('./routes/authorRoutes'))



// DATABASE CONNECTION
connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to Database')
}).catch(e => {
    console.log(e, 'Failed to connect to Database')
    process.exit(1)
})


// SERVER
const start = async () => {
    try {
        await fastify.listen(process.env.PORT, process.env.HOST)
    } catch (error) {
        fastify.log.error(error)
    }

}

start()