type Genre = {
  id: number
  name: string
}
// Dados recebidos quando faz a request para obter a lista de filmes
export type TmdbDataItemResultBase = {
  backdrop_path?: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

// Dados recebidos quando faz a request dos detalhes
export type TmdbDataItemResult = TmdbDataItemResultBase & {
  number_of_seasons?: number
  genres?: Genre[]
}

export type TmdbDataItem = {
  page: number
  total_pages: number
  total_results: number
  results: TmdbDataItemResult[]
}

export type TmdbData = {
  slug: string
  title: string
  items: TmdbDataItem
}
