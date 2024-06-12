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
      viewBox="0 0 30 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_27)">
        <path
          d="M27.615 0H2.38501C1.75247 0 1.14582 0.25859 0.698547 0.718872C0.251273 1.17915 0 1.80341 0 2.45435V20.5457C0 21.9012 1.06781 23 2.38501 23H27.615C28.9322 23 30 21.9012 30 20.5457V2.45435C30 1.09884 28.9322 0 27.615 0ZM4.99472 18.6136C4.99472 18.827 4.82416 19 4.61377 19H1.38095C1.17056 19 1 18.827 1 18.6136V16.3864C1 16.173 1.17056 16 1.38095 16H4.61905C4.82944 16 5 16.173 5 16.3864L4.99472 18.6136ZM4.99472 12.6136C4.99472 12.827 4.82416 13 4.61377 13H1.38095C1.17056 13 1 12.827 1 12.6136V10.3864C1 10.173 1.17056 10 1.38095 10H4.61905C4.82944 10 5 10.173 5 10.3864L4.99472 12.6136ZM4.99472 6.61292C4.99472 6.8267 4.82416 7 4.61377 7H1.38095C1.17056 7 1 6.8267 1 6.61292V4.37634C1.00573 4.16677 1.17462 3.99992 1.38095 4H4.61905C4.82944 4 5 4.1733 5 4.38708L4.99472 6.61292ZM18.5699 12.8192L12.3376 16.863C12.0648 17.0409 11.7246 17.0459 11.4474 16.8762C11.1703 16.7064 10.9993 16.3883 11 16.0439V7.95612C10.9993 7.61169 11.1703 7.29357 11.4474 7.12384C11.7246 6.95411 12.0648 6.95913 12.3376 7.13696L18.5699 11.1808C18.8367 11.353 19 11.6641 19 12C19 12.3359 18.8367 12.647 18.5699 12.8192ZM29 18.6136C29 18.827 28.8292 19 28.6185 19H25.3815C25.1708 19 25 18.827 25 18.6136V16.3864C25 16.173 25.1708 16 25.3815 16H28.6185C28.8292 16 29 16.173 29 16.3864V18.6136ZM29 12.6136C29 12.827 28.8292 13 28.6185 13H25.3815C25.1708 13 25 12.827 25 12.6136V10.3864C25 10.173 25.1708 10 25.3815 10H28.6185C28.8292 10 29 10.173 29 10.3864V12.6136ZM29 6.61426C29 6.82728 28.8292 7 28.6185 7H25.3815C25.1708 7 25 6.82728 25 6.61426V4.38574C25 4.17272 25.1708 4 25.3815 4H28.6185C28.8292 4 29 4.17272 29 4.38574V6.61426Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default Icon