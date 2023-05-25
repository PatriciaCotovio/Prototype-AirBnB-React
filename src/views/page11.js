import React from 'react'

import { Helmet } from 'react-helmet'

import './page11.css'

const Page11 = (props) => {
  return (
    <div className="page11-container">
      <Helmet>
        <title>Page11 - exported project</title>
        <meta property="og:title" content="Page11 - exported project" />
      </Helmet>
    </div>
  )
}

export default Page11
