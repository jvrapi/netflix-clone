import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { TmdbDataItem } from 'types/Tmdb'
import './styles.css'

type Props = {
  title: string
  items: TmdbDataItem
}

const ListMovies: React.FC<Props> = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    // empurra a lista para a direita
    let newScrollValue = scrollX + Math.round(window.innerWidth / 2)
    if (newScrollValue > 0) {
      newScrollValue = 0
    }

    setScrollX(newScrollValue)
  }

  const handleRightArrow = () => {
    // empurra a lista para a esquerda
    let newScrollValue = scrollX - Math.round(window.innerWidth / 2)

    const listWidth = items.results.length * 150

    if (window.innerWidth - listWidth > newScrollValue) {
      newScrollValue = window.innerWidth - listWidth - 60 // tira os 30 de padding da lista
    }
    setScrollX(newScrollValue)
  }
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
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
