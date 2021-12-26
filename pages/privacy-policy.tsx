import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../components'
import { DocumentLayout } from '../layouts'

const PrivacyPolicyPage: React.FC = () => (
  <DocumentLayout title="Privacy Policy">
    <div tw="flex flex-col">
      <Heading>Privacy Policy</Heading>
    </div>
  </DocumentLayout>
)

export {
  PrivacyPolicyPage
}
