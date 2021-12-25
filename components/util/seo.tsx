import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'wouter'

type SEOProperties = {
  title: string,
  description?: string,
  imageUrl?: string | URL,
  type?: 'website' | 'blog' | 'article'
}

const SEO: React.VFC<SEOProperties> = ({
  title,
  description = 'tuxsnctのウェブサイト・ポートフォリオなどなど / tuxsnct\'s Website, Portfolio, etc.',
  imageUrl,
  type = 'website'
}) => {
  const [location] = useLocation()
  const newTitle = `${title} | tuxsnct's Website`

  return (
    <Helmet>
      <title>{newTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={newTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={new URL(location, 'https://www.tuxsnct.com').toString()} />
      {imageUrl && <meta property="og:image" content={new URL(imageUrl).toString()} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="tuxsnct.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tuxsnct" />
    </Helmet>
  )
}

export {
  SEO
}
