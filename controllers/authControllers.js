const authModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {formidable} = require('formidable')
const cloudinary = require('cloudinary').v2

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


    update_writer = async (req,res) => {
       const {name, email, category, role} = req.body;
       const writerId = req.params.id

       if (!name || !email || !category) {
        return res.status(400).json({message: 'Please provide all field data'})
       }

       try {
        const writer = await authModel.findById(writerId)
        if (!writer) {
            return res.status(404).json({ message: 'Writer not found'})
        }

        writer.name = name.trim();
        writer.email = email.trim();
        writer.category = category.trim();
        writer.role = role.trim();

        await writer.save();
        return res.status(200).json({message: 'Writer updated succesfully',writer})


       } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' })
       }
         
    }
      //End Method

    delete_writer = async(req, res) => {
        const {id} = req.params;
        try {
            const writer = await authModel.findByIdAndDelete(id);
            if (!writer) {
                return res.status(404).json({ message: 'Writer not found'})
            }
            return res.status(200).json({message: 'Writer deleted successfully'})
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
     //End Method


update_profile = async (req, res) => {

    const form = formidable({ multiples: true }) // Parse form data, includeing images

    cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: true
    })

    form.parse(req, async(err, fields, files) => {
        if (err) {
            console.log('Formidable error',err)
            return res.status(400).json({message: 'Image Upload failed', error:err})
        }

    try {
        const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
        const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;

        if (!name || !email) {
            return res.status(400).json({ message: 'Missing requred fields'})
        }

        let updateData = {
            name: name.trim(),
            email: email.trim(),
        }

    // Check if an image is uploaded 
    const uploadedImage = Array.isArray(files.image) ? files.image[0] : files.image

    if (uploadedImage && uploadedImage.filepath) {
        const {url} = await cloudinary.uploader.upload(uploadedImage.filepath, {
            folder: 'news_images'
        });
        updateData.image = url;
    } else{
        console.log('No Image uploaded')
    }

    const updatedUser = await authModel.findByIdAndUpdate(req.params.id,updateData,{new:true});
    
    return res.status(200).json({message: 'Profile updated successfully',updatedUser}) 
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' })
    } 
    }) 
}
    //End Method

    get_profile = async (req, res) => {
        try {
         const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({message: 'User Id is required'})
        }

        const user = await authModel.findById(userId)
        return res.status(200).json({ user })
            
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }

    }
     //End Method

 changePassword = async (req,res) => {

    try {
        const {oldPassword,newPassword } = req.body;
        const userId = req.userInfo.id;
        
        const user = await authModel.findById(userId).select('+password')
        
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Old Password is incorrect'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword,salt)

        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({message: 'Password Updated Successfully'})        

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }

 }
    //End Method



}
module.exports = new authController()