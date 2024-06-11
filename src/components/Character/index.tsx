import { FC } from 'react'
// import { Flex, Typography, Toggle, Icon, Rating } from '@/components/'
import { CharacterProps } from '@/types/'
import { Favorite, BookIcon, CineIcon, Rating } from '@/components/'

const Character: FC<CharacterProps> = ({
  name,
  thumbnail,
  description,
  id,
  comics,
  series,
  lastComicDate
}) => {
  return (
    <section>
      <div>
        <div>
          <h1>{name}</h1>
          <Favorite id={id} />
        </div>
        <p>{description}</p>
        <ul>
          <li>
            <b>Quadrinhos</b>
            <div>
              <BookIcon />
              {comics.available}
            </div>
          </li>
          <li>
            <b>Quadrinhos</b>
            <div>
              <CineIcon />
              {series.available}
            </div>
          </li>
        </ul>
        <div>
          <b>Rating</b>: <Rating />
        </div>
        <div>
          <b>Último quadrinho</b>: {lastComicDate}
        </div>
      </div>
      <div>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </div>
    </section>
    // <Flex direction="column">
    //   <Flex>
    //     <Typography variant="h2" className="title">
    //       {title}
    //     </Typography>
    //     <Toggle
    //       onChange={() => {
    //         console.log('Toggle clicked')
    //       }}
    //       activeIcon="check-circle"
    //       inactiveIcon="circle"
    //     />
    //   </Flex>
    //   <Flex>
    //     <Typography variant="p" className="description">
    //       {description}
    //     </Typography>
    //   </Flex>
    //   {items.map((item, index) => (
    //     <Flex key={index}>
    //       <Typography variant="h3" className="item-label">
    //         {item.label}
    //       </Typography>
    //       <Icon name={item.icon} size={24} color="black" />
    //       <Typography variant="p" className="item-value">
    //         {item.value}
    //       </Typography>
    //     </Flex>
    //   ))}
    //   <Flex>
    //     <Typography variant="p">Rating:</Typography>
    //     <Rating value={rating} max={5} icon="star" />
    //   </Flex>
    //   <Flex>
    //     <Typography variant="p">Some text</Typography>
    //   </Flex>
    //   <Flex>
    //     <Typography variant="p">Another text</Typography>
    //   </Flex>
    // </Flex>
  )
}

export default Character
