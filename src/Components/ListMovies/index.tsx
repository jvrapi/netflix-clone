import React from 'react'
import { TmdbDataItem } from 'types/Tmdb'
import './styles.css'

type Props = {
  title: string
  items: TmdbDataItem
}

const ListMovies: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div
                className="movieRow--item"
                key={key}
                title={item.original_name || item.title}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export { ListMovies }
