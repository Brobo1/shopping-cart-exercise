import { func } from "prop-types";
import styles from "./Popup.module.css";

export function Popup(props) {
  return (
    <>
      <div className={styles.popupContainer}>
        <h1>aaaa</h1>
      </div>
    </>
  );
}

Popup.propTypes = {
  onClick: func,
};
