import React from 'react'

import { Helmet } from 'react-helmet'

import './page5.css'

const Page5 = (props) => {
  return (
    <div className="page5-container">
      <Helmet>
        <title>Page5 - exported project</title>
        <meta property="og:title" content="Page5 - exported project" />
      </Helmet>
    </div>
  )
}

export default Page5
