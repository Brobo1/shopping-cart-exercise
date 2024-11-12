import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { number } from "prop-types";

export function NavBar(props) {
  return (
    <>
      <nav style={styles}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shopping"}>Shopping ({props.count})</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  count: number,
};
