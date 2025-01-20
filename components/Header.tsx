'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '../lib/utils'

const Header = () => {
  const path = usePathname()
  return (
    <header className='flex justify-between gap-5 my-10'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
        <Link href='/' className='font-semibold text-2xl'>
          NextLibrary
        </Link>
      </div>
      <nav className='flex flex-row gap-5 items-center'>
        <Link
          href='/'
          className={cn(
            'text-base cursor-pointer capitalize',
            path === '/' ? 'text-light-200' : 'text-light-100'
          )}
        >
          Home
        </Link>
        <Link href='/books'>Search</Link>
        <Link href='/authors'>Authors</Link>
      </nav>
    </header>
  )
}

export default Header
