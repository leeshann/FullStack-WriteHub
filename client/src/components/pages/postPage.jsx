import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function PostPage() {

    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [title, setTitle] = useState("")

    const {id} = useParams()
    const navigate = useNavigate();


    useEffect(() => {
        const res = axios.get(`http://localhost:3049/${id}`)
        .then(response => {
            setContent(response.data[0].content)
            setAuthor(response.data[0].author)
            setTitle(response.data[0].title)
            setImageUrl(response.data[0].image_url)
        })
        .catch(error => console.error(error))

        if (!res.ok) {
            navigate('/404')
        }
    }, [])

    return (
        <article>
            <div className='postPage-postImageContainer'>
                <img src={`http://localhost:3049/images/${image_url}`} alt="article image" className='postPage-image'/>
            </div>
            <div className='postPage-header'>
                <h1>{title}</h1>
                <h4>Written by {author}</h4>
            </div>
            <div className='postPage-content'>
                {content}
            </div>
        </article>
    )
}