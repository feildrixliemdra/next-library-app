'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn, getInitials } from '../lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Session } from 'next-auth'

const Header = ({ session }: { session: Session }) => {
  const path = usePathname()
  return (
    <header className='flex justify-between gap-5 my-10'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
        <Link href='/' className='font-semibold text-2xl text-white'>
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
        <Link href='/profile' className='hover:cursor-pointer'>
          <Avatar>
            <AvatarFallback className='bg-amber-100'>
              {getInitials(session.user?.name || 'NL')}
            </AvatarFallback>
          </Avatar>
        </Link>
      </nav>
    </header>
  )
}

export default Header
