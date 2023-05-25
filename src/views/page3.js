import React from 'react'

import { Helmet } from 'react-helmet'

import './page3.css'

const Page3 = (props) => {
  return (
    <div className="page3-container">
      <Helmet>
        <title>Page3 - exported project</title>
        <meta property="og:title" content="Page3 - exported project" />
      </Helmet>
    </div>
  )
}

export default Page3
