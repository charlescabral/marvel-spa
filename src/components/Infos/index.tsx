import { FC } from 'react'
import { Flex, Typography, Toggle, Icon, Rating } from '@/components/'
import { InfosProps } from '@/types/'

const Infos: FC<InfosProps> = ({ title, description, items, rating }) => {
  return (
    <>asda</>
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

export default Infos
