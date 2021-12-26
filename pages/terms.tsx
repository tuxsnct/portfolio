import React from 'react'
import tw from 'twin.macro'
import { Text } from '../components'
import { DocumentLayout } from '../layouts'
import { ReactComponent as Terms } from '../terms.md'

const TermsPage: React.FC = () => (
  <DocumentLayout title="Terms">
    <Text tw="prose">
      <Terms />
    </Text>
  </DocumentLayout>
)

export {
  TermsPage
}
