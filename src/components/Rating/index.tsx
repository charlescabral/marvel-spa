import { FC } from 'react'
import { StarIcon } from '@/components/'

const Rating: FC = () => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(<StarIcon key={i} />)
  }

  return <div>{stars}</div>
}

export default Rating
