import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { Provider } from 'unistore/react'
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Route, Switch } from 'wouter'
import { store } from '../libraries'
import { HomePage, NotFoundPage } from '../pages'

const App: React.FC = () => {
  useRegisterSW()

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Provider>
    </>
  )
}

export {
  App
}
