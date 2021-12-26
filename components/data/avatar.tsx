import React from 'react'
import tw from 'twin.macro'
import { Image } from '../'

type AvatarProperties = React.ComponentProps<typeof Image> & {
  src: string,
  width: number,
  height: number,
  alt: string
}

const Avatar: React.FC<AvatarProperties> = (properties) => (
  <Image tw="flex-grow-0 rounded-full" {...properties} />
)

export {
  Avatar
}
