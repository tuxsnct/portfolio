import { CSSInterpolation } from '@emotion/serialize'
import { Icon, IconifyIcon, IconProps } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'
import { Avatar, Text } from '..'

const ButtonBox = tw.button`
  min-w-min min-h-full px-3 py-2 flex justify-center items-center space-x-1
  rounded-lg ripple-bg-yellow-500 shadow-lg focus:ring appearance-none select-none
`

type ButtonIconProperties = IconProps & {
  ref?: never
}

const ButtonIcon: React.FC<ButtonIconProperties> = ({ icon, css, ...rest }) => (
  <div css={[tw`flex items-center justify-center flex-shrink-0 w-8 h-8 min-h-full p-1 bg-white rounded-full`, css]}>
    <Icon icon={icon} tw="w-full h-full" {...rest} />
  </div>
)

type ButtonVariantProperties = {
  variant: 'normal',
  leftIcon?: never,
  rightIcon?: never,
  onClose?: never,
  iconStyles?: never,
  src?: never,
  avatarStyles?: never
} | {
  variant: 'icon',
  leftIcon: IconifyIcon | string,
  rightIcon?: never,
  onClose?: never,
  iconStyles?: CSSInterpolation,
  src?: never,
  avatarStyles?: never
} | {
  variant: 'icon',
  leftIcon?: never,
  rightIcon: IconifyIcon | string,
  onClose?: never,
  iconStyles?: CSSInterpolation,
  src?: never,
  avatarStyles?: never
} | {
  variant: 'close',
  leftIcon?: never,
  rightIcon?: never,
  onClose?: React.MouseEventHandler
  iconStyles?: never,
  src?: never,
  avatarStyles?: never
} | {
  variant: 'avatar',
  leftIcon?: never,
  rightIcon?: never,
  onClose?: never
  iconStyles?: never,
  src: string,
  avatarStyles?: CSSInterpolation
}

type ButtonProperties<T extends AnyComponent> =
  React.PropsWithChildren<
    PropertiesOf<T> & ButtonVariantProperties & {
      boxStyles?: CSSInterpolation,
      textStyles?: CSSInterpolation,
      ref?: never,
      as?: T
    }
  >

const Button = <T extends AnyComponent>({
  children,
  variant = 'normal',
  leftIcon,
  rightIcon,
  onClose,
  iconStyles,
  src,
  avatarStyles,
  boxStyles,
  textStyles,
  ...rest
}: ButtonProperties<T>): JSX.Element => (
    <ButtonBox css={boxStyles} {...rest}>
      {leftIcon && <ButtonIcon icon={leftIcon} css={iconStyles} />}
      {src && <Avatar src={src} css={avatarStyles} />}
      {
        children &&
        <Text css={[tw`text-sm font-bold dark:text-slate-900 whitespace-nowrap`, textStyles]}>{children}</Text>
      }
      {rightIcon && <ButtonIcon icon={rightIcon} css={iconStyles} />}
      {variant === 'close' && <ButtonIcon icon="mdi:close" css={iconStyles} onClick={onClose} />}
    </ButtonBox>
  )

export {
  Button
}
