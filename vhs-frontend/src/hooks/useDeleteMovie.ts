import { useRouter } from 'next/router'
import { deleteMovie } from '@/utils/deleteMovie'

export const useDeleteMovie = () => {
  const router = useRouter()

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await deleteMovie(id)
        
        if (router.asPath.startsWith('/movie-details/')) {
          router.push('/')
        } else {
          router.reload()
        }
      } catch (error) {
        console.error('Error deleting movie:', error)
      }
    }
  }

  return handleDelete
}
