import React from 'react'
import { FlexProps } from '@/types/'

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children
}) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    justifyContent,
    alignItems
  }

  return <div style={style}>{children}</div>
}

export default Flex
