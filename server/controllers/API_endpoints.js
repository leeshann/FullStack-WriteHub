const pool = require('../database.js')


const getAllPosts = async (req, res) => {
    try {
        const response = await pool.query(
            "SELECT * FROM post ORDER BY id ASC"
        )
        res.json(response.rows)
    } catch (error) {
        console.error(error.message)
    }
}

const getPost = async (req, res) => {
    const {id} = req.params

    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    try {
        const response = await pool.query(
            "SELECT * FROM post WHERE id = $1",
            [id]
        )

        if (response.rows.length === 0) {
            console.log("resource not found")
            return res.status(404).json({success: false, message: "Post not found"})
        }
        
        res.json(response.rows)
    } catch (error) {
        console.error(error.message)
    }
}

const createPost = async (req, res) => {
    try {
        const {author, title, content} = req.body
        const image_url = req.file.filename
        console.log("file name is ", req.file.filename)

        const response = await pool.query(
            "INSERT INTO post (author, image_url, title, content) VALUES ($1, $2, $3, $4) RETURNING *",
            [author, image_url, title, content]
        )

        res.status(201).json({success: true, message: "Post was created"})
    } catch (error) {
        console.error(error.message)
    }
}

const updatePost = async (req, res) => {
    try {
        const {id} = req.params
        const {author, title, content} = req.body
        const image_url = req.file.filename

        await pool.query(
            "UPDATE post SET author = $1, image_url = $2, title = $3, content = $4 WHERE id = $5",
            [author, image_url, title, content, id]
        )

        res.status(201).json({success: true, message: "Post has been updated"})
    } catch (error) {
        console.error(error.message)
    }
}

const deletePost = async (req, res) => {
    try {
        const {id} = req.params

        await pool.query(
            "DELETE FROM post WHERE id = $1",
            [id]
        )

        res.status(200).json({success: true, message: "Post has been deleted"})
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost }