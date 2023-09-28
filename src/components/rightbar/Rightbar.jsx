import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
         <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt=''></img>
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src='assets/ad.png' className='rightbarAd'></img>
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
    </ul>
       </div>
      </>
    )
  }

  const ProfileRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>City:</span>
          <span className='rightbarInfoValue'>New York</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>From:</span>
          <span className='rightbarInfoValue'>Mardid</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Relationship</span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className='rightbarFollowings'>
      <div className='rightbarFollowing'>
          <img src={`${PF}person/1.jpeg`} alt='' className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src={`${PF}person/2.jpeg`} alt='' className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src={`${PF}person/3.jpeg`} alt='' className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src={`${PF}person/4.jpeg`} alt='' className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src={`${PF}person/5.jpeg`} alt='' className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src={`${PF}person/6.jpeg`} alt='' className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
     {profile ? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
  )
}

export default Rightbar