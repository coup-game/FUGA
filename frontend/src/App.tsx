import styles from './App.module.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
