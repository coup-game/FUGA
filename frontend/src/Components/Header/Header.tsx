import styles from "../../Styles/Header/_header.module.scss"
import { TITLE } from "../../constant"

const Header = () => {
  return (
    <div className={styles.header_frame}>
      <div>{TITLE}</div>
      <div>LOGO</div>
      <div>패치노트</div>
    </div>
  )
}

export default Header