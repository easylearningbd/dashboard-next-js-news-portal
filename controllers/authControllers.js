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

    add_writer = async(req,res) => {
        // console.log(req.body)
        const { name,email,password, category} = req.body
        if (!name) {
            return res.status(404).json({ message: 'Please provide name' })
        }
        if (!email) {
            return res.status(404).json({ message: 'Please provide email' })
        }
        if (!password) {
            return res.status(404).json({ message: 'Please provide password' })
        }
        if (!category) {
            return res.status(404).json({ message: 'Please provide category' })
        }

        try {
            const writer = await authModel.findOne({ email: email.trim() })
            if (writer) {
                return res.status(404).json({ message: 'Writer already Exit' })
            }else {
                const new_writer = await authModel.create({
                    name: name.trim(),
                    email: email.trim(),
                    password: await bcrypt.hash(password.trim(),10),
                    category: category.trim(),
                    role: 'writer'
                })
                return res.status(201).json({ message: 'Writer Added Success', writer: new_writer })
            } 

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }


    }
      //End Method

    get_writers = async (req, res) => {
        try {
            const writers = await authModel.find({ role: "writer"}).sort({ createdAt: -1})
            return res.status(200).json({ writers })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }

    }
    //End Method

    getWriterById = async (req, res) => {
        const {id} = req.params;
        try {
            const writer = await authModel.findById(id);
            if (!writer) {
                return res.status(404).json({ message: 'Writer not found'});
            }
            return res.status(200).json({ writer });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
     //End Method

}
module.exports = new authController()