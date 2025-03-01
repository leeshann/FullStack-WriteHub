import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// views
import Home from './Home.jsx'
import CreatePost from './components/pages/createPost.jsx'
import EditPost from './components/pages/editPost.jsx'
import PostPage from './components/pages/postPage.jsx'
import PageNotFound from './components/pages/pageNotFound.jsx'


const router = createBrowserRouter([
{
  path: '/',
  element: <Home />
},
{
  path: '/create',
  element: <CreatePost />,
},
{
  path: '/edit/:id',
  element: <EditPost />
},
{
  path: '/:id',
  element: <PostPage />
},
{
  path: '/404',
  element: <PageNotFound />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
