import { FC } from 'react'
import { SvgProps } from '@/types'

const Icon: FC<SvgProps> = ({
  size = 24,
  color = 'currentColor',
  className
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.3176 5.2658L10.6835 4.53399C10.6835 4.53399 9.49543 1.88165 8.72715 0.578968C7.95785 -0.72371 7.39945 0.578968 7.39945 0.578968L5.32593 4.53399L0.59806 5.21984C-0.612436 5.7687 0.389167 6.56951 0.389167 6.56951L3.62531 9.6527L2.83259 14.1786C2.66956 15.5262 4.09098 14.7955 4.09098 14.7955L8.0261 12.8289L12.0346 14.8404C13.4092 15.4573 13.1524 14.0866 13.1524 14.0866L12.4524 9.67571L15.5968 6.54546C16.6453 5.5837 15.3176 5.2658 15.3176 5.2658Z"
        fill={color}
      />
    </svg>
  )
}

export default Icon
