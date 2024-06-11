import { FC, useState } from 'react'
import { ToggleProps } from '@/types/'

const OrderSwitch: FC<ToggleProps> = ({ onChange, order }) => {
  const [checked, setChecked] = useState<boolean | undefined>(order === 'name')

  const handleClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange({ orderBy: newChecked ? '-name' : 'name' })
  }

  return (
    <button
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={handleClick}
    >
      <svg
        width="75"
        height="39"
        viewBox="0 0 75 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 39L55.5 39C66.2696 39 75 30.2696 75 19.5C75 8.73045 66.2696 0 55.5 0L19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39Z"
          fill="#E4E5E9"
        />

        {checked ? (
          <path
            d="M55.5 30C61.299 30 66 25.299 66 19.5C66 13.701 61.299 9 55.5 9C49.701 9 45 13.701 45 19.5C45 25.299 49.701 30 55.5 30Z"
            fill="#FF0000"
          />
        ) : (
          <path
            d="M19.5 9C13.701 9 9 13.701 9 19.5C9 25.299 13.701 30 19.5 30C25.299 30 30 25.299 30 19.5C30 13.701 25.299 9 19.5 9Z"
            fill="#FF0000"
          />
        )}
      </svg>
    </button>
  )
}

export default OrderSwitch
