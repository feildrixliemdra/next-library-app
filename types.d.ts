interface Book {
  id: number
  title: string
  author: string
  genre: string
  rating: number
  total_copies: number
  available_copies: number
  description: string
  cover_color: string
  cover_url: string
  video_url: string
  summary: string
  isLoaned: boolean
}

interface AuthCredentials {
  fullName: string
  email: string
  password: string
  universityId: number
  universityCard: string
}
