import { useState, useEffect } from 'react'
import axios from 'axios'

//using Link component instead of <a> tag doesnt cause the page to refresh and re-mount, but using <a> tag generates a refresh
import { Link } from 'react-router-dom'
import './App.css'

//components
import Post from './components/post'


function Home() {

  const [posts, setPosts] = useState([])

  async function getPosts() {
      axios.get("http://localhost:3049")
      .then(response => setPosts(response.data))
      .catch(e => console.error('Error:', error))
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <>
      <div className='inputcontainer'>
        <input className='searchbar' type="text" placeholder='Search posts...'/>
        <button className='buttonCSS'>Search</button>
        <Link to="/create">
          <button className='buttonCSS'>Create Post</button>
        </Link>
      </div>

      <div className='postcontainer'>
        {posts.map((item) => {
          return <Post id={item.id} author={item.author} image_url={item.image_url} title={item.title} content={item.content} created_at={item.created_at.slice(0, 10)}/>

        })}
      </div>
    </>
  )
}



export default Home
