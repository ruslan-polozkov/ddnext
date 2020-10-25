import React from 'react'
import Layout from '../../components/Layout'
import withAPILocale from '../../hocs/withAPILocale'

const DominoRules: React.FC = () => {
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
                <h2>Classic Dominoes Rules

                </h2>
              </div>
              <div className="content_img">
                <img src="/img/second-pages/dominoes-rules.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Domino is one of the most fascinating and ancient board games. The history of domino dates back to ancient China, where the game was called “Bone Tablets.” The Chinese version of the game also implied the absence of a field with the number zero (“soap”) on the dices, which appeared later in Europe.

                Classic Domino game is a set of small light-colored tablets made of ivory (or simple) bone with ebony dots. It is because of this fact that, probably, the name of the game appeared, which has French roots. In France, this name was given to winter clothes of the Christian priests, which were black on the outside and white on the inside.

                The history of the origin of the domino game takes us back to the distant twelfth century, although the exact date remains unknown. On the territory of China, they have long loved to play with various dice, which were brought into the country from the territory of India. Initially, players rolled the dice twice. The first throw was part of the left half of the domino, and the second throw was the right half.

                There is also some mystical note in the history of the origin of the domino. In some countries, dices were used for fortune telling and various goetic rituals. In Korea and India, they are still subjects for predicting what awaits a person in the future.

                How did the game develop in Europe and Russia?

                The game originates in the Old World in Italy, where initially it became a hobby of monks from Italy, but later the entertainment won France over, and it reached England in the eighteenth century.

                The history of domino in Russia is not so rich, since the game has existed only for about three hundred years on the territory of our country. But this time was enough for it to become truly national. The younger generation prefers to play dominoes online with virtual opponents, while there is nothing more pleasant for the older generation than going out into the yard with their favorite set and dropping the dice on the table with a bang.

                This game not only develops mathematical skills, but also develops analytical qualities in a person. Therefore, it doesn’t matter where and what kind of dominoes you play. The main thing is to get genuine pleasure from the process. Moreover, you will also develop your personal qualities, which, perhaps, are a surprise for you!
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default withAPILocale('homepage')(DominoRules)
