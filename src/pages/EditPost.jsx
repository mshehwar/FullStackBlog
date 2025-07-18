import React ,{useEffect,useState} from 'react'
import { Container,PostForm } from '../component'
import service from '../appwrite/config'
import { useParams ,useNavigate} from 'react-router-dom'


function EditPost() {
    const [posts ,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate;

    useEffect(() => {
      if (slug) {
        service.getPost(slug).then((post) => {
          if (post) {
            setPosts(post)
          }
        })
      } else {
        navigate('/')
      }

    }, [slug ,navigate])

  return post ? (
   <Container>

    <PostForm post={post} />
   </Container>
  ) : null
}

export default EditPost