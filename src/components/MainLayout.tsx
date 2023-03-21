import React from 'react'
import { Children } from 'react';

type Props = {
    children: JSX.Element;
}

export default function MainLayout({children}: Props) {
  return (
    <div className='px-32 w-full py-4 justify-center items-start flex flex-col'>
        {children}
    </div>
    
  )
}