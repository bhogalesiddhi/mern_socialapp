import { MoreVert } from '@mui/icons-material'
import React, { useState , useEffect } from 'react'
import "./post.css"
// import { Users } from '../../dummyData'
import axios from 'axios'

const Post = ({post}) => {
    const [like,setLike] = useState(post.likes.length)
    const [isliked,setIsLiked] = useState(false)
    const [user,setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get("http://localhost:8800/api/users/650749a4597f600d3c213cd1");
            // setUser(res.data)
            console.log(res.data)
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
        fetchUser();
      }, []);

    const likeHandler = () => {
        setLike(isliked? like-1 : like+1)
        setIsLiked(!isliked)
    }
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={user.profilePicture || PF+"person/noAvatar.jpg"} className='postProfileImg'></img>
                    <span className='postUsername'>{user?.username}</span>
                    {console.log(user.username)}
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post?.desc}</span>
                <img src={PF+post.photo} alt='' className='postImg'></img>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon' src={ `${PF}like.png`} onClick={likeHandler} alt=''></img>
                    <img className='likeIcon' src={ `${PF}heart.png`} alt=''onClick={likeHandler}></img>
                    <span className='postLikeCounter'>{like}people like it</span>
                </div>
                <div className='postBottomRight'>
                  <span className='postCommentText'>{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post