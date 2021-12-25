import React from 'react'
import { render } from 'react-dom'
// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register'
import { App } from './components'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'

registerSW()

render(<App />, document.body)

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line unicorn/prefer-module
  // @ts-expect-error, unnecessary type definition
  import('preact/debug')
}
