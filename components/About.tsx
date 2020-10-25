import React from 'react'
import useTranslation from '../hooks/useTranslation'
import 'styles/sass/test.scss'

const About: React.FC = () => {
  const { locale, t } = useTranslation()
  return (
    <div>
      <h1>About page</h1>
      <img src="/img/magritte.jpg" alt="Rene Magritte" />
      <p>{t('hero_title')}</p>
      <p>{t('hero_title')}</p>
      <p>{t('hero_title')}</p>
      <p>{t('hero_title')}</p>
      <p>{t('hero_title')}</p>
      <p>{t('hero_title')}</p>
      <a href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>{t('hero_title')}</a>
    </div>
  )
}

export default About
