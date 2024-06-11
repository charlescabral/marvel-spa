import { FC, CSSProperties } from 'react'
import { GridProps } from '@/types/'

const Grid: FC<GridProps> = ({ columns = 1, gap = '0', children }) => {
  const style: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap
  }

  return <div style={style}>{children}</div>
}

export default Grid
