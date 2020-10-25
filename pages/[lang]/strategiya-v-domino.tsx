import React from 'react'
import Layout from '../../components/Layout'
import withAPILocale from '../../hocs/withAPILocale'

const StrategiyaVdomino: React.FC = () => {
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <Layout titleKey="about">
      <div className="wrapper">
        <article className="main" style={bgImage}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>Стратегия игры в домино</h2>
              </div>
              <div className="content_img">
                <img src="/img/second-pages/strategiya-v-domino.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Стратегия игры в домино
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default withAPILocale('homepage')(StrategiyaVdomino)
