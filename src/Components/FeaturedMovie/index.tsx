import React from 'react'
import { TmdbDataItemResult } from 'types/Tmdb'

type Props = {
  item: TmdbDataItemResult
}

const FeaturedMovie: React.FC<Props> = ({ item }) => {
  console.log(item)
  return <div>FeaturedMovie</div>
}

export { FeaturedMovie }
