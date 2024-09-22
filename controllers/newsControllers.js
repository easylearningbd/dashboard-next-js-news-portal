const {formidable} = require('formidable')
const cloudinary = require('cloudinary').v2
const newsModel = require('../models/newsModel')
const galleryModel = require('../models/galleryModel')
const {mongo: { ObjectId }} = require('mongoose')
const moment = require('moment')

class newsControllers {

    add_news = async (req,res) => {
        const { id, name, category } = req.userInfo
        const form = formidable({})

        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
            secure: true
        })

        try {
            const [ fields, files ] = await form.parse(req)
            const { url } = await cloudinary.uploader.upload(files.image[0].filepath, {folder: 'news_images'})
            const {title,description} = fields

            const news = await newsModel.create({
                writerId: id,
                writerName: name,
                title: title[0].trim(), 
                slug: title[0].trim().split(' ').join('-'),
                category, 
                description: description[0],
                date: moment().format('LL'),
                image: url
            })
            return res.status(201).json({message: 'News Added Successfully',news})
            
        } catch (error) {
              return res.status(500).json({message: 'Internal server Error'})
        } 
    }
    //End Method 

    get_images = async (req, res) => {
        const {id} = req.userInfo
        try {
           const images = await galleryModel.find({ writerId: new ObjectId(id) }).sort({ createdAt: -1 })
           return res.status(201).json({ images })
        } catch (error) {
            return res.status(500).json({message: 'Internal server Error'})
        }
    }
     //End Method 

    add_images = async (req, res) => {

        const { id } = req.userInfo
        const form = formidable({})

        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
            secure: true
        })

        try {
            const [ _, files ] = await form.parse(req)
            let allImages = []
            const { images } = files

        for (let i = 0; i < images.length; i++) {
            const { url } = await cloudinary.uploader.upload(images[i].filepath, {folder: 'news_images'})
            allImages.push({ writerId: id,url })
        }

        const image = await galleryModel.insertMany(allImages)
        return res.status(201).json({ images:image, message: "Images Uploaded Successfully" })

        } catch (error) {
            return res.status(500).json({message: 'Internal server Error'})
        }

    }
      //End Method 

    get_dashboard_news = async (req, res) => {
       console.log(req.userInfo)
    }
 //End Method 


}

module.exports = new newsControllers()