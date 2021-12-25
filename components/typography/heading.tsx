import React from 'react'
import tw from 'twin.macro'

type HeadingVariant = `h${1|2|3|4|5}`

const HeadingBase = tw.h1`text-slate-900 dark:text-slate-100 font-bold select-none`

// eslint-disable-next-line consistent-return
const getHeadingStyles = (as: HeadingVariant) => {
  switch (as) {
  case 'h1': return tw`text-5xl`
  case 'h2': return tw`text-4xl`
  case 'h3': return tw`text-3xl`
  case 'h4': return tw`text-2xl`
  // No default
  }
}

type HeadingProperties = React.ComponentProps<React.ReactHTML['h1']> & {
  as?: HeadingVariant
}

const Heading: React.FC<HeadingProperties> = ({ as = 'h1', children, ...rest }) => (
  <HeadingBase as={as} css={getHeadingStyles(as)} {...rest}>
    {children}
  </HeadingBase>
)

export {
  Heading
}
