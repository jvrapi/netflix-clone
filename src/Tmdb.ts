import axios from 'axios'
import { TmdbData, TmdbDataItem } from 'types/Tmdb'

type HomeList = {
  slug: string
  title: string
  items(): Promise<void>
}

const API_KEY = '298552175d308a93f6f32f7635448c9e'
const API_BASE = 'https://api.themoviedb.org/3'

/*
  - originais 
  - recomendados (trending) 
  - em alta (top rated)
  - ação
  - comédia
  - terror
  - romance
  - comentários
*/

const basicFetch = async (endpoint: string): Promise<TmdbDataItem[]> => {
  const { data } = await axios.get(`${API_BASE}${endpoint}`)
  return data
}

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        )
      },

      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(
          `movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(
          `discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        )
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(
          `discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        )
      }
    ]
  }
}

export { Tmdb }
