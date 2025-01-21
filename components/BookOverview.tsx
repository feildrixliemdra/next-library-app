import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import BookCover from './BookCover'

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  cover_color,
  cover_url,
}: Book) => {
  return (
    <section className='book-overview'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>
        <div className='book-info'>
          <p>
            By <span className='font-semibold text-light-200'>{author}</span>
          </p>

          <p>
            Category{' '}
            <span className='font-semibold text-light-200'>{genre}</span>
          </p>
          <div className='flex gap-1 items-center'>
            <Image src='/icons/star.svg' width={22} height={22} alt='star' />
            <p>{rating}</p>
          </div>

          <div className='book-copies'>
            <p>
              Total Books: <span>{total_copies}</span>
            </p>
            <p>
              Available Books: <span>{available_copies}</span>
            </p>
          </div>

          <p>{description}</p>

          <Button className='book-overview_btn'>
            <span>
              <Image src='/icons/book.svg' width={20} height={20} alt='book' />
            </span>
            Borrow Book Request
          </Button>
        </div>
      </div>

      <div className='relative flex flex-1 justify-center'>
        <div className='relative'>
          <BookCover
            variant='wide'
            className='z-10'
            coverColor={cover_color}
            coverImage={cover_url}
          />
          <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden blur-sm'>
            <BookCover
              variant='wide'
              coverColor={cover_color}
              coverImage={cover_url}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookOverview
