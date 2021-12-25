import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import tw, { GlobalStyles } from 'twin.macro'
import { Provider } from 'unistore/react'
import { Route, Switch } from 'wouter'
import { store } from '../libraries'
import { HomePage, NotFoundPage } from '../pages'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY}
      scriptProps={{
        async: true
      }}
    >
      <Provider store={store}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Provider>
    </GoogleReCaptchaProvider>
  </>
)

export {
  App
}
