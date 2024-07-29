const {z, string} = require("zod")

const userRegisterBody = z.object({
    fullname:z.string(),
    email:z.string().email(),
    password:z.string()
})

const userLoginBody = z.object({
    email:z.string().email(),
    password:z.string()
})

module.exports = {
    userRegisterBody,
    userLoginBody
}