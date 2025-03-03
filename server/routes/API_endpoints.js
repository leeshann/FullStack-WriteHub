const express = require('express')
const router = express.Router()
const multer = require('multer')

const { getAllPosts, 
        getPost, 
        createPost, 
        updatePost, 
        deletePost } = require('../controllers/API_endpoints.js')



//multer for receiving file and uploading to local storage
const storage = multer.diskStorage({
    //sets the uploaded files destination
    destination: function(req, file, cb) {
        return cb(null, './public/images')
    },
    //sets the uploaded files name in local storage
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }   
})

const upload = multer({storage})

router.get('/', getAllPosts)

router.get('/:id', getPost)

router.post('/', upload.single('image_url'), createPost)

router.put('/:id', upload.single('image_url'), updatePost)

router.delete('/:id', deletePost)

module.exports = router