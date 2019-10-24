import axios from 'axios'
import { Movie } from '../interfaces/Movie'

const API_KEY = process.env.API_KEY

export class MovieService {
  async GetMovies (): Promise<Movie[]> {
    let response: Movie[] = []
    try {
      const { data, status } = await axios({
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      })

      if (data && status === 200) {
        response = data.results
      }
      return response
    } catch (error) {
      return response
    }
  }

  async GetMovieDetail (id: string): Promise<Movie> {
    let response: Movie = {}

    try {
      const { data, status } = await axios({
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      })

      if (data && status === 200) {
        response = data
      }
      return response
    } catch (error) {
      return response
    }
  }
}
