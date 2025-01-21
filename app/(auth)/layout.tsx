import Image from 'next/image'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='auth-container'>
      <section className='auth-form'>
        <div className='auth-box'>
          <div className='flex items-center gap-3'>
            <Image src='/icons/logo.svg' alt='logo' width={37} height={37} />
            <h1 className='text-2xl font-semibold text-white'>NextLibrary</h1>
          </div>

          <>{children}</>
        </div>
      </section>

      <section className='auth-illustration'>
        <Image
          src='/images/auth-illustration.png'
          alt='auth illustration'
          height={1000}
          width={1000}
          className='size-full object-cover'
        />
      </section>
    </main>
  )
}

export default Layout
