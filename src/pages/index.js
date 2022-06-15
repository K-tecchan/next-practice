import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import * as style from '../styles/index.module.scss'

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <Image src='/images/index-hero.jpg' alt='hero' layout='fill' objectFit='cover' quality={90} />
        <div className={style.textContainer}>
          <h1>ゴリラゴリラ</h1>
          <h3>ハンバーグ大好き</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>gorilla</h2>
            <p>uho uho uhouho uhouhooooo uhouho uhoho uhohoi uhooooo</p>
          </div>
          <Image src='/images/profile.jpg' alt='hero' height={1195} width={1000} quality={90} />
        </div>
        <div className={style.skills}>
          <h2>SKills</h2>
          <div className={style.skillsContainer}>
            <div><img src="/images/javascript.svg" alt="javascript" /><span>JavaScript / 10 years</span></div>
            <div><img src="/images/react.svg" alt="react" /><span>React / 5 years</span></div>
            <div><img src="/images/gatsby.svg" alt="gatsby" /><span>Gatsby / 3 years</span></div>
            <div><img src="/images/next.svg" alt="next" /><span>Next.JS / 3 years</span></div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link href='/contact'>Make It Happen!</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index