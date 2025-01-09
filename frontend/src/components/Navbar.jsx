import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    const navigate = useNavigate()

    return (

        <div className='sticky top-0'>
            <div className='bg-white flex items-center justify-between text-sm py-4 mb-6 border-b border-b-gray-400'>
                <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="logo" srcset="" />
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink to='/'>
                        <li className='py-1'>HOME</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/doctors'>
                        <li className='py-1'>ALL DOCTORS</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/about'>
                        <li className='py-1'>ABOUT</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/contact'>
                        <li className='py-1'>CONTACT</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                </ul>
                <div className=''>
                    {
                        token
                            ?
                            <div className='flex items-center gap-2 cursor-pointer group relative'>
                                <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile-picture" srcset="" />
                                <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown-icon" />

                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-4'>
                                        <p onClick={() => navigate('my-profile')} className='hover:text-gray-800 cursor-pointer'>My Profile</p>
                                        <p onClick={() => navigate('my-appointments')} className='hover:text-gray-800 cursor-pointer'>My Appointments</p>
                                        <p onClick={() => setToken(false)} className='hover:text-gray-800 cursor-pointer'>Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button onClick={() => navigate('/login')} className='bg-primary text-white text-sm font-light px-8 py-3 rounded-full hidden md:block'>Create accout</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar