import React from 'react'
import tw from 'twin.macro'
import { useLocation } from 'wouter'
import { Text } from '../'

const Footer: React.FC = () => {
  const [, setLocation] = useLocation()

  return (
    <footer tw="w-full flex justify-center items-center p-8">
      <div tw="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        <Text tw="font-bold text-xl underline cursor-pointer" onClick={() => setLocation('/terms')}>
          Terms
        </Text>
        <Text tw="font-bold text-xl underline cursor-pointer" onClick={() => setLocation('/privacy-policy')}>
          Privacy Policy
        </Text>
        <Text tw="font-bold text-xl">&copy; {new Date().getFullYear()} tuxsnct.</Text>
      </div>
    </footer>
  )
}

export {
  Footer
}
