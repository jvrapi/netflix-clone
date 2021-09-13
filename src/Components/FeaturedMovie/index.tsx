import React from 'react'
import { TmdbDataItemResult } from 'types/Tmdb'
import './styles.css'

type Props = {
  item: TmdbDataItemResult
}

const FeaturedMovie: React.FC<Props> = ({ item }) => {
  const firstDate = new Date(item.first_air_date)
  const genres: string[] = []

  item.genres?.forEach(({ name }) => genres.push(name))

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--season">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 && 's'}
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--butons">
              <a href={`/watch/${item.id}`}>► Assistir</a>
              <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: {genres.join(', ')}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FeaturedMovie }
