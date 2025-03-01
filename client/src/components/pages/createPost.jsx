import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function CreatePost() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [content, setContent] = useState("")

    async function createPost(e) {
        e.preventDefault()

        const newPost = new FormData()
        newPost.append('title', title)
        newPost.append('author', author)
        newPost.append('image_url', image_url)
        newPost.append('content', content)

        axios.post('http://localhost:3049', newPost)
        .then(response => console.log(response))
        .catch(error => console.error(error))

        window.location = '/'
    }

    return (
        <form className="createForm" onSubmit={createPost}>
            <section className="formSection">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="Create post title" maxLength="50" className="shortInput greyBackground border" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </section>
            <section className="formSection">
                <label htmlFor="author">Author name</label>
                <input type="text" name="author" placeholder="Enter your name" maxLength="100" className="shortInput greyBackground border" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            </section>
            <section className="formSection">
                <label htmlFor="image_url">Choose a header image:</label>
                <input type="file" name="image_url" accept="image/*" className="fileButtonWidthFix" onChange={(e) => setImageUrl(e.target.files[0])} required/>
            </section>
            <section className="formSection">
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" cols="50" rows="10" placeholder="Enter content" className="greyBackground border" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            </section>
            <button type="submit" className="buttonCSS">Publish</button>
        </form>
    )
}