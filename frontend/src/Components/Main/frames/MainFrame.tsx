import MemberJoin from "../../../Logic/API/MemberJoin"
import styles from "../../../Styles/Main/_main.module.scss"
import Signin from "../../Reusable/Form/Signin"

const MainFrame = () => {
    return (
      <div className={styles.mainframe}>
        
        {true ? <Signin /> : <MemberJoin />}
      </div>
    )
  }
  
  export default MainFrame