import React from 'react'
import Layout from '../../components/Layout'
import withAPILocale from '../../hocs/withAPILocale'

const Domino5: React.FC = () => {
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
                <h2>Домино пятёрка</h2>
              </div>
              <div className="content_img">
                <img src="/img/second-pages/all-fives-dominoes.jpeg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Домино 5 – одна из самых увлекательных разновидностей настольной игры. Её правила практически ничем не отличаются от классического варианта, за исключением одного «маленького» нюанса. Задача игрока не просто сбросить все свои камни, пристроив их к общей
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default withAPILocale('homepage')(Domino5)
