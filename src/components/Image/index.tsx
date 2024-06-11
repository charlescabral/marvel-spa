import { FC, useState } from 'react'
import { ImageProps } from '@/types/'

const Image: FC<ImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)
  const [isError, setIsError] = useState(false)

  const handleImageLoaded = () => {
    setImageSrc(src)
  }

  const handleImageError = () => {
    setIsError(true)
  }

  return (
    <>
      {isError ? (
        <span>Failed to load image</span>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleImageLoaded}
          onError={handleImageError}
          style={{ display: imageSrc ? 'block' : 'none' }}
        />
      )}
    </>
  )
}

export default Image
