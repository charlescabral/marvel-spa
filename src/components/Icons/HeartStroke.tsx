import { FC } from 'react'
import { SvgProps } from '@/types'

const Icon: FC<SvgProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4287 11.0533L10.2683 18.8854C10.1999 18.9606 10.1026 19 10.0018 19C9.90094 19 9.80371 18.9606 9.73528 18.8854L2.57489 11.0533C0.475036 8.76034 0.475036 5.03067 2.57489 2.73767C3.59779 1.61625 4.96288 1 6.418 1C7.75067 1 9.01131 1.5159 10.0018 2.46533C10.9923 1.5159 12.2493 1 13.582 1C15.0371 1 16.4058 1.61625 17.4323 2.73767C19.525 5.03067 19.5214 8.76034 17.4287 11.0533Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

export default Icon
