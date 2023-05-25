import React from 'react'

import { Helmet } from 'react-helmet'

import './page6.css'

const Page6 = (props) => {
  return (
    <div className="page6-container">
      <Helmet>
        <title>Page6 - exported project</title>
        <meta property="og:title" content="Page6 - exported project" />
      </Helmet>
    </div>
  )
}

export default Page6
