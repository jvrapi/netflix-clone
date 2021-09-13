import React, { useEffect, useState } from 'react'
import { Tmdb } from 'Tmdb'
import { TmdbData } from 'types/Tmdb'

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<TmdbData[]>([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return <div className="page"></div>
}

export { App }
