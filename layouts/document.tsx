import React from 'react'
import tw from 'twin.macro'
import { useLocation } from 'wouter'
import { Button } from '../components'
import { BaseLayout } from '.'

type DocumentLayoutProperties = React.ComponentProps<typeof BaseLayout>

const DocumentLayout: React.FC<DocumentLayoutProperties> = ({ children, ...rest }) => {
  const [, setLocation] = useLocation()

  return (
    <BaseLayout {...rest}>
      <div tw="grid p-8 gap-8 lg:(p-24 gap-24)">
        <nav tw="w-full flex items-center">
          <Button as="button" variant="icon" leftIcon="mdi:arrow-left" onClick={() => setLocation('/')}>
            Back
          </Button>
        </nav>
        <div tw="flex flex-col items-center">
          {children}
        </div>
      </div>
    </BaseLayout>
  )
}

export {
  DocumentLayout
}
