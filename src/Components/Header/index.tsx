import React from 'react'
import './styles.css'

type Props = {
  changeHeaderColor: boolean
}

const Header: React.FC<Props> = ({ changeHeaderColor }) => {
  return (
    <header className={`${changeHeaderColor && 'header--changeBackground'}`}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="NetflixClone"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  )
}

export { Header }
