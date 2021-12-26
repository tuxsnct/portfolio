import React from 'react'
import tw from 'twin.macro'
import { Footer, SEO } from '../components'

type BaseLayoutProperties = React.ComponentProps<typeof SEO>

const BaseLayout: React.FC<BaseLayoutProperties> = ({ children, ...rest }) => (
  <div tw="w-full h-full min-w-full min-h-screen flex flex-col bg-slate-100 dark:bg-slate-900 overflow-hidden">
    <SEO {...rest} />
    {children}
    <Footer />
  </div>
)

export {
  BaseLayout
}
