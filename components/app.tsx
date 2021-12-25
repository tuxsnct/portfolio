import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { Provider } from 'unistore/react'
import { Route, Switch } from 'wouter'
import { store } from '../libraries'
import { HomePage, NotFoundPage } from '../pages'

const App: React.FC = () => (
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

export {
  App
}
