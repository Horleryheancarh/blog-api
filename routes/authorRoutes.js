const { signupAuthor, loginAuthor, logoutAuthor } = require('../controllers/authorControllers')

// Schemas
const Author = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' }
    }
}

// SignUp
const signUp = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' }
            }
        },
        response: {
            200: Author
        }
    },

    handler: signupAuthor
}


// Login
const logIn = {
    schema: {
        body: {
            type: 'object',
            required: [ 'email', 'password' ],
            properties: {
                email: { type: 'string' },
                password: { type: 'string' }
            }
        },
        response: {
            200: Author
        }
    },

    handler: loginAuthor
}


// Logout
const logOut = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    },

    handler: logoutAuthor
}



function authorRoutes (fastify, options, done) {

    // Signup
    fastify.post('/signup', signUp)

    // Login
    fastify.post('/login', logIn)

    // Logout
    fastify.post('/logout', logOut)

    done()
}

module.exports = authorRoutes