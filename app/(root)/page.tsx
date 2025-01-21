import BookList from '../../components/BookList'
import BookOverview from '../../components/BookOverview'
import { sampleBooks } from '../../constant'

export default function Home() {
  return (
    <main>
      <BookOverview {...sampleBooks[0]} />
      <BookList />
    </main>
  )
}
