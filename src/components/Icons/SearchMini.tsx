import { FC } from 'react'
import { SvgProps } from '@/types'

const Icon: FC<SvgProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6843 17.2017L14.0246 12.5364C16.3675 9.48699 16.1332 5.08233 13.3217 2.29358C11.7859 0.755856 9.80746 0 7.80302 0C5.79857 0 3.82016 0.755856 2.28429 2.29358C-0.761429 5.34296 -0.761429 10.2949 2.28429 13.3443C3.82016 14.882 5.79857 15.6379 7.80302 15.6379C9.46905 15.6379 11.1351 15.1166 12.5148 14.048L17.2005 18.6873C17.4087 18.8958 17.6691 19 17.9554 19C18.2157 19 18.5021 18.8958 18.7103 18.6873C19.1008 18.2963 19.1008 17.6187 18.6843 17.2017ZM7.64961 13.1945C6.1558 13.1945 4.78858 12.6124 3.72519 11.575C1.57308 9.42408 1.57308 5.90677 3.72519 3.73059C4.76326 2.69311 6.1558 2.11108 7.64961 2.11108C9.14342 2.11108 10.5106 2.69311 11.574 3.73059C12.6374 4.76807 13.1944 6.15981 13.1944 7.65277C13.1944 9.14573 12.6121 10.5122 11.574 11.575C10.536 12.6377 9.11811 13.1945 7.64961 13.1945Z"
        fill={color}
      />
    </svg>
  )
}

export default Icon
