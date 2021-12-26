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
        display: 'standalone',
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
        start_url: '/',
        theme_color: '#f59e0b'
      },
      registerType: 'autoUpdate',
      workbox: {
        inlineWorkboxRuntime: true
      }
    })
  ],
  server: {
    host: '0.0.0.0'
  }
}

export default config
