import Icon from '@mdi/react';
import { mdiBullhornOutline } from '@mdi/js';
import styles from "../../Styles/Header/_header.module.scss";
import { TITLE } from "../../constant";

const Header = () => {
  return (
    <div className={styles.header_frame}>
      <div className={styles.header_title}>{TITLE}</div>
      <div className={styles.header_logo}>LOGO</div>
      <div className={styles.header_notice}>
        <Icon path={mdiBullhornOutline} size={2} />
        <div className={styles.header_notice_content_wrapper}>
          <div className={styles.header_notice_content}>2023/03/20 패치 내역</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
