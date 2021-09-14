import React from 'react'

import './styles.css'
const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        Feito com{' '}
        <span role="img" aria-label="coração">
          ❤
        </span>{' '}
        por{' '}
        <a
          target="_blank"
          href="https://github.com/jvrapi"
          title="João Vitor Santos"
          rel="noreferrer"
        >
          João Vitor Santos
        </a>
      </p>
      <p>Direitos de imagem para Netflix</p>
      <p>
        Dados retirados do site{' '}
        <a target="_blank" href="https://www.themoviedb.org/" rel="noreferrer">
          The Movie DB
        </a>
      </p>
    </footer>
  )
}

export { Footer }
