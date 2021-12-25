import reactPlugin from '@vitejs/plugin-react'
import { UserConfig } from 'vite'
import { VitePWA as vitePwaPlugin } from 'vite-plugin-pwa'

const config: UserConfig = {
  plugins: [
    reactPlugin({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react'
            }
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro'
          ]
        ]
      }
    }),
    vitePwaPlugin({
      manifest: {
        icons: [
          {
            sizes: '192x192',
            src: '/icon-192x192.png',
            type: 'image/png'
          },
          {
            sizes: '512x512',
            src: '/icon-512x512.png',
            type: 'image/png'
          },
          {

            purpose: 'any maskable',
            sizes: '512x512',
            src: '/icon-512x512.png',
            type: 'image/png'
          }
        ],
        name: 'tuxsnct\'s Website',
        short_name: 'tuxsnct',
        theme_color: '#f59e9e'
      },
      registerType: 'autoUpdate',
      workbox: {
        inlineWorkboxRuntime: true
      }
    })
  ]
}

export default config
