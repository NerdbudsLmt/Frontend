import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight, BsArrowDownShort } from 'react-icons/bs'

export default function HeaderComponent() {
  return (
    <>
      <header className='pt-10'>
        <div className='flex flex-col items-center space-y-5 mb-16'>
          <div>
            <Link
              href='/privacy-policy'
              className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full'
            >
              <>
                <span>Privacy Policy</span>
                <BsArrowRight className='text-lg' />
              </>
            </Link>
          </div>
          <div>
            <h1 className='text-5xl font-bold text-center text-white lg:text-7xl'>
              <span className='text-5xl font-bold text-center text-app-sblue lg:text-7xl'>
                Terms
              </span>{' '}
              and
              <span className='text-5xl text-[#F9D262] lg:text-7xl'>
                {' '}
                Conditions
              </span>
            </h1>
          </div>
          <div className='text-center'>
            <p className='w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center'>
              The terms and conditions governing GeekOps and all their products
              are stated below.
            </p>
          </div>
        </div>
      </header>
    </>
  )
}
