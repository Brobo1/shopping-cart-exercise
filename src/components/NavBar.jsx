import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav>
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
