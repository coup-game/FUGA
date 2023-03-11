import MemberJoin from "../../Reusable/Form/Memberjoin"
import styles from "../../../Styles/Main/_main.module.scss"
import Signin from "../../Reusable/Form/Signin"
import { useState } from "react"

const MainFrame = () => {
  const [toggle, setToggle] = useState(true);

  const transform = () => {
    setToggle((e) => !e)
  }
    return (
      <div className={styles.mainframe}>
        <button onClick={transform}>test</button>
        {toggle ? <Signin /> : <MemberJoin />}
      </div>
    )
  }
  
  export default MainFrame