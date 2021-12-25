import { CSSInterpolation } from '@emotion/serialize'
import { Icon, IconifyIcon, IconProps } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'
import { Text } from '../'

const CardContainer =
  tw.div`p-4 flex gap-4 items-center shadow-lg rounded-xl bg-slate-300 dark:bg-slate-700`

type CardIconProperties = IconProps & {
  ref?: never
}

const CardIcon: React.FC<CardIconProperties> = ({ icon, css, ...rest }) => (
  <div css={[tw`flex items-center justify-center flex-shrink-0 w-12 h-12 min-h-full p-2 bg-white rounded-full`, css]}>
    <Icon icon={icon} tw="w-full h-full" {...rest} />
  </div>
)

type CardNumberProperties = React.ComponentProps<React.ReactHTML['div']> & {
  number: number
  ref?: never
}

const CardNumber: React.VFC<CardNumberProperties> = ({ number, css, ...rest }) => (
  <div
    {...rest}
    css={[tw`flex items-center justify-center flex-shrink-0 w-12 h-12 min-h-full p-2 bg-white rounded-full`, css]}
  >
    <Text tw="text-2xl font-bold dark:text-slate-900">{number}</Text>
  </div>
)

type CardVariantProperties = {
  variant: 'icon',
  leftIcon?: IconifyIcon | string,
  rightIcon?: IconifyIcon | string,
  iconStyles?: CSSInterpolation,
  number?: never,
  numberStyles?: never,
  children?: never
} | {
  variant: 'number',
  leftIcon?: never,
  rightIcon?: never,
  iconStyles?: never,
  number: number,
  numberStyles?: CSSInterpolation,
  children?: never
} | {
  variant: 'box',
  leftIcon?: never,
  rightIcon?: never,
  iconStyles?: never,
  number?: never,
  numberStyles?: never,
  children?: React.ReactNode
}

type CardProperties<T extends AnyComponent> =
  React.PropsWithChildren<
    PropertiesOf<T> & CardVariantProperties & {
      title?: string,
      titleStyles?: CSSInterpolation,
      ref?: never,
      as?: T,
      css?: CSSInterpolation,
      withRipple?: boolean
    }
  >

const Card = <T extends AnyComponent>({
  title,
  titleStyles,
  leftIcon,
  rightIcon,
  iconStyles,
  number,
  numberStyles,
  children,
  css,
  withRipple,
  ...rest
}: CardProperties<T>) => (
    <CardContainer css={[withRipple && tw`ripple-bg-slate-300 dark:ripple-bg-slate-700`, css]} {...rest}>
      {leftIcon && <CardIcon icon={leftIcon} css={iconStyles} />}
      {number && <CardNumber number={number} css={numberStyles} />}
      {
        title && (
          <Text css={[
            tw`overflow-hidden text-lg font-bold truncate whitespace-normal md:text-2xl text-slate-900`,
            titleStyles
          ]}>
            {title}
          </Text>
        )
      }
      {rightIcon && <CardIcon icon={rightIcon} css={iconStyles} />}
      {children}
    </CardContainer>
  )

export {
  Card
}
