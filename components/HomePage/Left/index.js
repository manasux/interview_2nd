import React from 'react'
import Image from 'next/image'
import Box from '../../../public/images/box-large.png'



function Left() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2' >
           
            <div className='flex justify-center absolute top-5  mx-auto text-white font-bold text-4xl py-5'>
            RELETIVE 
            </div>
            <div className=''>
                <Image src={Box} objectFit='cover' />
            </div>
        </div>
    )
}

export default Left
