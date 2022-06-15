import Layout from '../components/layout'
import * as style from '../styles/contact.module.scss'

const Contact = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Contact</h1>
          <p>お気軽にご連絡ください</p>
          <form>
            <label htmlFor="name">name</label>
            <input type="text" name='name' id='name' required />
            <label htmlFor="email">mail</label>
            <input type='email' name='email' id='email' required />
            <label htmlFor="textarea">message</label>
            <textarea name="message" id="textarea" rows="10" required></textarea>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact