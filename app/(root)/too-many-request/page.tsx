import React from 'react'

const TooManyRequest = () => {
  return (
    <main className='root-container flex flex-col min-h-screen items-center justify-center'>
      <h1 className='font-bebas-neue text-5xl font-bold text-light-100'>
        Too Many Request
      </h1>
      <p className='mt-3 max-w-xl text-center text-light-400'>
        Looks like you&apos;ve been a little too eager. We&apos;ve put a
        temporary pause on your excitement. 🚦 Chill for a bit, and try again
        shortly
      </p>
    </main>
  )
}

export default TooManyRequest
