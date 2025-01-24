import React from 'react'
import { signOut } from '../../../auth'
import { Button } from '../../../components/ui/button'
import BookList from '../../../components/BookList'
import { sampleBooks } from '../../../constant'

const Profile = () => {
  return (
    <div>
      {' '}
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button>Logout</Button>
      </form>
      <BookList
        title='Borrowed Book'
        books={sampleBooks}
        containerClassName='mt-28'
      />
    </div>
  )
}

export default Profile
