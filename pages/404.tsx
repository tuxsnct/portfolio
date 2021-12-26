import React from 'react'
import tw from 'twin.macro'
import { Avatar, Heading } from '../components'
import { BaseLayout } from '../layouts'

const NotFoundPage: React.FC = () => (
  <BaseLayout title="Not Found">
    <div tw="w-full h-screen flex items-center justify-center p-12 gap-12 lg:(p-24 gap-24)">
      <div tw="flex gap-8 flex-col items-center">
        <Avatar
        // eslint-disable-next-line no-secrets/no-secrets
          src="https://www.gravatar.com/avatar/698994bad3112f6a9cfa8e51a8a6f689?s=240"
          width={240}
          height={240}
          alt="tuxsnct"
          css={tw`overflow-hidden shadow-lg min-w-min animate-spin-slow`}
        />
        <Heading as="h2" tw="whitespace-nowrap">404, Not Found.</Heading>
      </div>
    </div>
  </BaseLayout>
)

export {
  NotFoundPage
}
