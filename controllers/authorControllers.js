import { Author } from '../models/authorModel'
import { Hash, compare } from 'crypto'
import { findOne, create, find } from '../models/authorModel'

const signupAuthor = async (req, reply) => {

    try {
        const { name, email, password } = req.body
        const newAuthor = await findOne({ email: email })

        if (!newAuthor) {
            const hashed = await hash(password, 10)
            const newAuthor = await create({name: name, email: email, password: hashed})
            reply.send(newAuthor)
        } else {
            reply.code(500).send({message: 'Email exists, Please Login'})
        }
    } catch (e) { 
        reply.code(500).send(e)
    }
}

const loginAuthor = async (req, reply) => {

    try {
        const { email, password } = req.body
        const author = await findOne({ email: email })

        if (user) {
            const isValid = await compare(password, author.password)

            if (isvalid) {
                isLoggedIn = {
                    isAuth: true,
                    email: author.email
                }
                reply.send({message: 'Log In successful'})
            } else {
                reply.code(300).send({message: 'Invalid password'})
            }
        } else {
            reply.code(300).send({message: 'Invalid Credentials'})
        }
    } catch (e) {
        reply.code(500).send(e)
    }
}

const logoutAuthor = async (req, reply) => {
    try {
        if (isLoggedIn.isAuth) {
            isLoggedIn = {
                isAuth: false,
                email: '',
            }
            reply.send({message: 'Logout successful'})
        } else {
            reply.send({message: 'You need to log in before you can logout'})
        }
    } catch (e) {
        reply.code(401).send({message: 'Unauthorized access Please LogIn'})
    }
}


export default { signupAuthor, loginAuthor, logoutAuthor }