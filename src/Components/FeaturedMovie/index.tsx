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

  const limitOverview = (overview: string) => {
    const length = 370
    if (overview.length > length) {
      return overview.slice(0, length) + '...'
    }
    return overview
  }

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
          <div className="featured--name" title="Nome">
            {item.original_name}
          </div>
          <div className="featured--info">
            <div className="featured--points" title="Votos">
              {item.vote_average} pontos
            </div>
            <div className="featured--year" title="Ano">
              {firstDate.getFullYear()}
            </div>
            <div className="featured--seasons" title="Temporadas">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 && 's'}
            </div>
            <div className="featured--description" title="Descrição">
              {limitOverview(item.overview)}
            </div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className="featured--watchButton">
                {' '}
                ► Assistir
              </a>
              <a
                href={`/list/add/${item.id}`}
                className="featured--myListButton"
              >
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <strong title="Gêneros">Gêneros: {genres.join(', ')}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FeaturedMovie }
