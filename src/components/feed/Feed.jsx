import React, { useState , useEffect} from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from '../../dummyData'
import axios from "axios"

const Feed = () => {
  const [posts,setPosts] = useState([]);
  const [text,setText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("posts/timeline/65089a36cfc2e0953d0cfb5f");
        setPosts(res.data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  
  return (
    <div className='feed'>
    
    <div className='feedWrapper'>
      <Share/>
      {/* {
        Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))
      } */}

      {
        posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))
      }
    </div>
    </div>
  )
}

export default Feed