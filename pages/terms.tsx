import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'
import { DocumentLayout } from '../layouts'

const TermsPage: React.FC = () => (
  <DocumentLayout title="Terms">
    <div tw="flex flex-col">
      <Heading>Terms</Heading>
    </div>
  </DocumentLayout>
)

export {
  TermsPage
}
