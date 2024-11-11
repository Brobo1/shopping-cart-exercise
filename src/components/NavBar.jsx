import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <>
      <nav style={styles}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shopping"}>Shopping</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
