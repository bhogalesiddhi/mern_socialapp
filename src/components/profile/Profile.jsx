import React from 'react'
import "./profile.css"
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
        <Topbar/>
        <div className='profile'>
            <Sidebar/>
            <div className='profileRight'>
            <div className='profileRightTop'>
            <div className='profileCover'>
                <img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt=''/>
                <img className='profileUserImg' src={`${PF}person/7.jpeg`} alt=''/>
            </div>
            <div className='profileInfo'>
                <h4 className='profileInfoName'>Safak kocaglu</h4>
                <span className='profileInfoDesc'>Hello my friends!!!</span>
            </div>
            </div>
            <div className='profileRightBottom'>
            <Feed/>
            <Rightbar profile />
            </div>
            
            </div>
            
        </div>
    </>
  )
}

export default Profile