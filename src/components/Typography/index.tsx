import { ReactNode, FC } from 'react'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  className?: string
  children: ReactNode
}

const Typography: FC<TypographyProps> = ({
  variant,
  className = '',
  children
}) => {
  const Tag = variant

  return <Tag className={className}>{children}</Tag>
}

export default Typography
