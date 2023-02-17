import styles from "../../../Styles/Main/_main.module.scss"
import Signin from "../../Reusable/Form/Signin"

const MainFrame = () => {
    return (
      <div className={styles.mainframe}>
        <Signin />
      </div>
    )
  }
  
  export default MainFrame