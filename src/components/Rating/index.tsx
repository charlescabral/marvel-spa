import { FC } from 'react'
import { StarIcon } from '@/components/'

const Rating: FC = () => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(<StarIcon key={i} />)
  }

  return <div className="text-primary flex-row gap-2">{stars}</div>
}

export default Rating
