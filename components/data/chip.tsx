import React from 'react'
import tw from 'twin.macro'
import { Button } from '../button'

const Chip: typeof Button = (properties) => <Button {...properties} boxStyles={tw`rounded-l-full rounded-r-full`} />

export {
  Chip
}
