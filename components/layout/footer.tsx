import React from 'react'
import tw from 'twin.macro'
import { Text } from '../'

const Footer: React.FC = () => (
  <footer tw="w-full flex justify-center items-center">
    <div tw="max-w-6xl w-full h-24 flex justify-center items-center">
      <Text tw="font-bold text-xl">&copy; {new Date().getFullYear()} tuxsnct.</Text>
    </div>
  </footer>
)

export {
  Footer
}
