import { ListMovies } from 'Components/ListMovies'
import React, { useEffect, useState } from 'react'
import { Tmdb } from 'Tmdb'
import { TmdbData } from 'types/Tmdb'
import './styles/global.css'

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<TmdbData[]>([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <ListMovies key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export { App }
