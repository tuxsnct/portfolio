import React from 'react'
import tw from 'twin.macro'
import { Image } from '../'

type AvatarProperties = React.ComponentProps<typeof Image> & {
  src: string
}

const Avatar: React.FC<AvatarProperties> = (properties) => (
  <Image tw="rounded-full" {...properties} />
)

export {
  Avatar
}
