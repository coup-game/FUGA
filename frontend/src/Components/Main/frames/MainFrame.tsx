import MemberJoin from "../../Reusable/Form/Memberjoin"
import styles from "../../../Styles/Main/_main.module.scss"
import Signin from "../../Reusable/Form/Signin"

const MainFrame = () => {
    return (
      <div className={styles.mainframe}>
        <MemberJoin/>
        {/* {true ? <Signin /> : <MemberJoin />} */}
      </div>
    )
  }
  
  export default MainFrame