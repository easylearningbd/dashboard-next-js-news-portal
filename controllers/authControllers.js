const authModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class authController {

    login = async(req,res) => {
        const { email, password } = req.body

        if (!email) {
            return res.status(404).json({ message: 'Please provide your email'})
        }
        if (!password) {
            return res.status(404).json({ message: 'Please provide your password'})
        }

        try {
            const user = await authModel.findOne({ email }).select('+password')
            // console.log(user)
            if (user) {
                const match = await bcrypt.compare(password, user.password)
                if (match) {
                    const obj = { 
                        id: user.id,
                        name: user.name,
                        category: user.category,
                        role: user.role
                    }
                    const token = await jwt.sign(obj, process.env.secret,{
                        expiresIn: process.env.exp_time
                    })
                    return res.status(200).json({message: 'Login Success',token})
                } else {
                    return res.status(404).json({ message: 'Invalid Password'})
                }
                
            } else {
                return res.status(404).json({ message: 'User not Found'})
            } 

        } catch (error) {
            console.log(error)
        }

    }
    //End Method
    

}
module.exports = new authController()