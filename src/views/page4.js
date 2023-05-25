import React from 'react'

import { Helmet } from 'react-helmet'

import './page4.css'

const Page4 = (props) => {
  return (
    <div className="page4-container">
      <Helmet>
        <title>Page4 - exported project</title>
        <meta property="og:title" content="Page4 - exported project" />
      </Helmet>
    </div>
  )
}

export default Page4
