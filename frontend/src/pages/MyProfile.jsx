import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Siam Ahmed",
    image: assets.profile_pic,
    email: "siamahmed@gmail.com"
  })
  return (
    <div>

    </div>
  )
}

export default MyProfile