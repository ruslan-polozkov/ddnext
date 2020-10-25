import React from 'react'
import Layout from '../../components/Layout'
import HomePage from '../../components/HomePage'
import withAPILocale from '../../hocs/withAPILocale'

const IndexPage: React.FC = () => {
  return (
    <Layout titleKey="dominoes">
      <HomePage />
    </Layout>
  )
}

export default withAPILocale('homepage')(IndexPage)
