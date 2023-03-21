import React from 'react'
import MainLayout from '@/components/MainLayout'
import  ProfileCard  from '@/components/ProfileCard'

const ProfilePage = () => {
  return (
    <MainLayout>
        <div className='w-full flex-col flex justify-center items-center pt-20'>
            <ProfileCard/>
        </div>
    </MainLayout>
  )
}

export default ProfilePage