import React from 'react'

import { Helmet } from 'react-helmet'

import './page2.css'

const Page2 = (props) => {
  return (
    <div className="page2-container">
      <Helmet>
        <title>Page2 - exported project</title>
        <meta property="og:title" content="Page2 - exported project" />
      </Helmet>
    </div>
  )
}

export default Page2
