import React from 'react'
import Layout from '../../components/Layout'
import withAPILocale from '../../hocs/withAPILocale'

const HowToPlayDominoes: React.FC = () => {
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
                <h2>The History of Dominoes</h2>
              </div>
              <div className="content_img">
                <img src="/img/second-pages/history-of-dominoes.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Online Dominoes Where to play dominoes for free when there is no opportunity to get together at home with your friends? The answer to this question seems difficult only at first glance, since you can play dominoes without registration, additional SMS checks and other complicated actions on our website.

                This is convenient enough as you can play your favorite game from anywhere in the world. If we are talking about online dominoes, then it will require the Internet access only and your smartphone, computer, laptop or tablet, where the application will be installed or the website launched in the browser. There is also an opportunity to play not with real people, but with computers that imitate players of varying degrees of training: from beginners to experts who calculate, like experienced chess players, all your moves in advance.

                Our site allows you to play dominoes online without registration, i.e. this is not required for the gameplay. However, if you want to save your progress and statistics, we recommend that you go through a simple registration procedure. It won’t take you more than one minute. It is enough to enter basic data, and you get to the club.\

                When playing dominoes online, the rules of the board game, beloved by millions, do not differ from the classic ones, according to which you play at tables at home or on the street. You can choose any game format that you like best, where everyone plays for himself, or the classic, when the battle for victory is fought in teams, each of which consists of two people.

                And, of course, playing dominoes on the Internet is an opportunity to practice and learn the basic rules of playing “dices.” This is a good springboard and preparation for a fun and successful meeting with friends at the same table. You will be an experienced and trained player who will surprise everyone with your skills and non-standard moves when playing dominoes!
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default withAPILocale('homepage')(HowToPlayDominoes)
