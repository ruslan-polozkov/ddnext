import React from 'react'
import Layout from '../../components/Layout'
import withAPILocale from '../../hocs/withAPILocale'

const DominoOnline: React.FC = () => {
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
                <h2>Онлайн домино
                </h2>
              </div>
              <div className="content_img">
                <img src="/img/second-pages/dominoes-online.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Где бесплатно играть в домино, когда возможности собраться дома в компании друзей нет?
                Ответ на этот вопрос кажется сложным только на первый взгляд, поскольку в нашем приложении вы можете играть в домино без регистрации, дополнительных смс
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default withAPILocale('homepage')(DominoOnline)
