import React from 'react'
import Layout from '../../components/Layout'
import Artist from '../../components/Artist'
import withAPILocale from '../../hocs/withAPILocale'

const AboutPage: React.FC = () => {
  return (
    <Layout titleKey={"LIVERPOOL"}>
      <Artist />
    </Layout>
  )
}

export default withAPILocale('homepage')(AboutPage)
