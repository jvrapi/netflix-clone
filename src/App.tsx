import React, { useEffect, useState } from 'react'
import { ListMovies } from 'Components/ListMovies'
import { FeaturedMovie } from 'Components/FeaturedMovie'
import { Header } from './Components/Header'
import { Tmdb } from 'Tmdb'
import { TmdbData, TmdbDataItemResult } from 'types/Tmdb'
import './styles/global.css'

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<TmdbData[]>([])
  const [featuredData, setFeaturedData] = useState<TmdbDataItemResult | null>(
    null
  )

  const [changeHeaderColor, setChangeHeaderColor] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      setMovieList(list)

      const originals = list.filter(item => item.slug === 'originals')
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setChangeHeaderColor(true)
      } else {
        setChangeHeaderColor(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      // remove o evento quando sai da pagina
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header changeHeaderColor={changeHeaderColor} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <ListMovies key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export { App }
