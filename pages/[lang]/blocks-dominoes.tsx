import React from 'react'
import Layout from '../../components/Layout'
import withAPILocale from '../../hocs/withAPILocale'

const BlocksDominoes: React.FC = () => {
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
                <h2>Dominoes Blocks</h2>
              </div>
              <div className="content_img">
                <img src="/img/second-pages/blocks-dominoes.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                he educational game Gyenesh Blocks is a great way to keep your child busy, captivating with really interesting and developing action. Computer games with Dienes blocks are interesting in that the kit does not include a single complete
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default withAPILocale('homepage')(BlocksDominoes)
