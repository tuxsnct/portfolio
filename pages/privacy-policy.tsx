import React from 'react'
import tw from 'twin.macro'
import { Text } from '../components'
import { DocumentLayout } from '../layouts'
import { ReactComponent as PrivacyPolicy } from '../privacy-policy.md'

const PrivacyPolicyPage: React.FC = () => (
  <DocumentLayout title="Privacy Policy">
    <Text tw="prose-lg">
      <PrivacyPolicy />
    </Text>
  </DocumentLayout>
)

export {
  PrivacyPolicyPage
}
