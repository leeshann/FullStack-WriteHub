import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function editPost() {

    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [title, setTitle] = useState("")

    const {id} = useParams()
    // console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:3049/${id}`)
        .then(response => {
            setContent(response.data[0].content)
            setAuthor(response.data[0].author)
            setTitle(response.data[0].title)
            setImageUrl(response.data[0].image_url)
        })
        .catch(error => console.error(error))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const newPost = new FormData()
        newPost.append('author', author)
        newPost.append('title', title)
        newPost.append('image_url', image_url)
        newPost.append('content', content)

        axios.put(`http://localhost:3049/${id}`, newPost)
        .then(response => console.log(response.data))
        .catch(error => console.error(error))

        window.location = "/"
    }


    return (
        <form className="createForm" onSubmit={handleSubmit}>
        <section className="formSection">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="Create post title" maxLength="50" className="shortInput greyBackground border" value={title} onChange={(e) => setTitle(e.target.value)}required/>
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
        <button type="submit" className="buttonCSS">Confirm Edits</button>
    </form>
    )
}